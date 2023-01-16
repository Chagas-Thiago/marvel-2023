import { Grid } from '@material-ui/core'
import React from 'react'
import CardComics from '../components/cardComics'

const ComicsPageSection = (data: any) => {
    const { title, images, description } = data.data
    console.log(data)
    return (
        <Grid item xs={3} style={{ marginTop: "2%" }}>
            <CardComics
                images={images}
                description={description}
                title={title}
            />
        </Grid>
    )
}

export default ComicsPageSection