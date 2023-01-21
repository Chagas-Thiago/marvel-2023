import { Grid } from '@material-ui/core'
import React from 'react'
import CardComics from '../components/cardComics'

const ComicsPageSection = (
    {
        data,
        setImage,
        setOpen,
        setTitle,
        setDescription
    }: any
) => {
    const { title, images, description } = data

    return (
        <Grid item xs={3} style={{ marginTop: "2%" }}>

            <CardComics
                setOpen={setOpen}
                setTitle={setTitle}
                setDescription={setDescription}
                setImage={setImage}
                images={images}
                description={description}
                title={title}
            />
        </Grid>
    )
}

export default ComicsPageSection