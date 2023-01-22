import React from 'react'
import { Grid } from '@material-ui/core'
import useStylesCharId from '../styles/charIdPageSection.styles'
import { ICharacterCard } from '../utils/type'

const CharIdPageSection = (data: { data: ICharacterCard }) => {

    const classes = useStylesCharId()
    const { thumbnail, description, name } = data.data

    return (
        <Grid className={classes.container} container item xs={12} md={8}>
            <Grid item xs={6}>
                <img
                    className={classes.img}
                    alt=""
                    src={thumbnail}
                />
            </Grid>
            <Grid item xs={6}>

                <p className={classes.name}>{name}</p>

                <p className={classes.typography}>{description || "No description provided by the Marvel API"}</p>
            </Grid>
        </Grid>
    )
}

export default CharIdPageSection