import { Grid } from '@material-ui/core'
import useStylesCards from './cards.styles'


const CardComics = ({
    title,
    description,
    images,
    setImage,
    setOpen,
    setTitle,
    setDescription
}: any) => {

    const classes = useStylesCards()


    return (
        <Grid
            onClick={() => {
            setTitle(title)
            setDescription(description)
            setOpen(true)
                setImage(images[0]?.path + '.' + images[0]?.extension)

        }} className={classes.containerCards} container>
            <img alt=""
                className={classes.imgComics}
                src={images[0]?.path + '.' + images[0]?.extension}
            />
        </Grid>

    )
}

export default CardComics