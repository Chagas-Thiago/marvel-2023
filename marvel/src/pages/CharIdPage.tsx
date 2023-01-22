import React, { useCallback, useState } from 'react'
import { Grid } from '@material-ui/core'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import CustomModal from '../components/modal/modal'
import CharIdPageSection from '../pagesSections/CharIdPageSection'
import ComicsPageSection from '../pagesSections/ComicsPageSection'
import { IDataComics } from '../utils/type'


const CharIdPage = () => {

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const { state } = useLocation()
    const apiKey = process.env.REACT_APP_KEY
    const getData = useCallback(async () => {
        const { data, } = await axios.get<IDataComics>(`https://gateway.marvel.com:443/v1/public/characters/${state.id}/comics?apikey=${apiKey}`)
        return data.data.results
    }, [apiKey, state.id])
    const { data, isLoading } = useQuery(
        ["getComics"],
        getData, { cacheTime: 0 }
    )

    return isLoading ? null : (
        <Grid style={{ marginTop: "2%" }} container justifyContent='center' item>

            <CustomModal
                open={open}
                image={image}
                title={title}
                description={description}
                setOpen={setOpen}
            />
            <Grid container justifyContent='center' item xs={12} md={10}>

                <CharIdPageSection data={state} />

                <Grid container justifyContent='center' style={{ color: "white" }}>
                    {data && data.map((value) =>
                        <ComicsPageSection
                            data={value}
                            setOpen={setOpen}
                            setTitle={setTitle}
                            setDescription={setDescription}
                            setImage={setImage}
                        />
                    )}
                </Grid>

            </Grid>

        </Grid>
    )
}

export default CharIdPage
