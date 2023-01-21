import useStylesButton from './button.styles'
import { Button, Grid } from '@material-ui/core'
import { Build } from '@material-ui/icons';
const ButtonCustom = () => {
    const classes = useStylesButton()
    return (


        <Button className={classes.button}>
            <Build className={classes.img} />

                <p className={classes.text}>
                Discover the technologies behind our project
                </p>

        </Button>



    )
}

export default ButtonCustom