import { Grid } from '@material-ui/core'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useLocation } from 'react-router-dom';
import CharIdPageSection from '../pagesSections/CharIdPageSection';
import ComicsPageSection from '../pagesSections/ComicsPageSection';
import { IDataComics } from '../utils/type';

const CharIdPage = () => {
    const { state } = useLocation()
    const apiKey = process.env.REACT_APP_KEY
    const getData = async () => {
        const { data } = await axios.get<IDataComics>(`https://gateway.marvel.com:443/v1/public/characters/${state.id}/comics?apikey=${apiKey}`)
        return data.data.results
    }
    const { data, isLoading } = useQuery(["getComics"], getData)

    return isLoading ? null : (
        <Grid container justifyContent='center' item>
            <Grid container justifyContent='center' item xs={10}>

                <CharIdPageSection data={state} />

                <Grid container style={{ color: "white" }}>
                    {data && data.map((value) =>
                        <ComicsPageSection data={value} />
                    )}
                </Grid>

            </Grid>

        </Grid>
    )
}

export default CharIdPage