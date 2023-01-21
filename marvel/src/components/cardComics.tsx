import React from 'react'
import { Grid } from '@material-ui/core'
import { IComics } from '../utils/type'
import useStylesCards from './cards/cards.styles'

const CardComics = (props: IComics) => {

    const classes = useStylesCards()
    const { title, description, images } = props

    return (

        <Grid className={classes.containerCards} container>
            {/* {images.map((value =>
                <img alt=""
                    className={classes.img}
                    src={value.path + '.' + value.extension}
                />
            ))
            } */}
            <img alt=""
                className={classes.img}
                src={images[0].path + '.' + images[0].extension}
            />
            <p className={classes.typography}>
                {description}
            </p>
            <div className={classes.face1} >
                {title}
            </div>

        </Grid>

    )
}

export default CardComics