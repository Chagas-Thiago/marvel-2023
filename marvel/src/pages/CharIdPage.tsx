import { Grid } from '@material-ui/core'
import React from 'react'
import { useLocation } from 'react-router-dom';
import CharIdPageSection from '../pagesSections/CharIdPageSection';

const CharIdPage = () => {
    const { state } = useLocation();
    console.log(state)
    return (
        <Grid container justifyContent='center'>
            <CharIdPageSection data={state} />
        </Grid>
    )
}

export default CharIdPage