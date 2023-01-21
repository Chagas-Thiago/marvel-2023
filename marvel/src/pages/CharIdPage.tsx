import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import CustomModal from '../components/modal/modal'
import CharIdPageSection from '../pagesSections/CharIdPageSection'
import ComicsPageSection from '../pagesSections/ComicsPageSection'
import { IDataComics } from '../utils/type'
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const CharIdPage = () => {

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const { state } = useLocation()
    const apiKey = process.env.REACT_APP_KEY
    const getData = async () => {
        const { data, } = await axios.get<IDataComics>(`https://gateway.marvel.com:443/v1/public/characters/${state.id}/comics?apikey=${apiKey}`)
        return data.data.results
    }
    const { data, isLoading } = useQuery(
        ["getComics"],
        getData, { cacheTime: 0 }
    )
    console.log(title)
    return isLoading ? null : (
        <Grid container justifyContent='center' item>

            <CustomModal
                style={{ transition: "1.5s" }}
                maxWidth="md"
                open={open}
                onClose={() => setOpen(false)}
                TransitionComponent={Transition}
            >
                <Grid style={{ transition: "1.5s" }} onClick={() => setOpen(false)} container alignItems='center'>
                    <Grid container alignItems='center' item xs={3}>
                        <img alt=""
                            style={{ height: "99%", width: "100%" }}
                            src={image}
                        />
                    </Grid>

                    <Grid style={{ padding: 10 }} item xs={9}>
                        <p style={{
                            textAlign: "center",
                            color: "red",
                            fontSize: 30,
                            fontWeight: "bold",
                            textShadow: "black 1px 0 2px"
                        }}>
                            {title}
                        </p>
                        {description}
                    </Grid>

                </Grid>
            </CustomModal>
            <Grid container justifyContent='center' item xs={10}>

                <CharIdPageSection data={state} />

                <Grid container style={{ color: "white" }}>
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
