import React from 'react'
import { Grid } from '@material-ui/core'
import useStylesCards from './cards.styles'
import { ICharacterCard } from '../../utils/type'
import { useNavigate } from 'react-router-dom'

const CardChars = (props: ICharacterCard) => {
    const navigate = useNavigate()
    const classes = useStylesCards()
    const { thumbnail, description, name } = props
    const data = { thumbnail, description, name }

    return (

        <Grid onClick={() => navigate('/charId', { state: data })} className={classes.containerCards} container item xs={3}>
            <img alt=""
                className={classes.img}
                src={thumbnail}
            />
            <p className={classes.typography}>
                {description}
            </p>
            <div className={classes.face1} >
                {name}
            </div>

        </Grid>

    )
}

export default CardChars