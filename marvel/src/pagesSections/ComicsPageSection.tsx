import { Grid } from '@material-ui/core'
import React from 'react'
import CardComics from '../components/cards/cardComics'

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
        <Grid container justifyContent='center' item xs={10} sm={6} md={3} style={{ marginTop: "2%" }}>

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