import React from 'react'
import { Grid } from '@material-ui/core'
import useStylesCards from './cards.styles'
import { ICharacterCard } from '../../utils/type'
import { useNavigate } from 'react-router-dom'

const CardChars = (props: ICharacterCard) => {
    const navigate = useNavigate()
    const classes = useStylesCards()
    const { thumbnail, description, name, id } = props
    const data = { thumbnail, description, name, id }

    return (

        <Grid onClick={() => navigate('/charId', { state: data })} className={classes.containerCards} container>
            <img alt=""
                className={classes.img}
                src={thumbnail}
            />
            <p className={classes.typography}>
                {description || "No description provided by the Marvel API"}
            </p>
            <div className={classes.face1} >
                {name}
            </div>

        </Grid>

    )
}

export default CardChars