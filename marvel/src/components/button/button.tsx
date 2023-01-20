import useStylesButton from './button.styles'
import { Button, Avatar, Grid } from '@material-ui/core'
import Reacteur from "../../assets/reacteur.jpg"
const ButtonCustom = () => {
    const classes = useStylesButton()
    return (
        <Grid container style={{ paddingRight: "20%", paddingLeft: "20%" }}>
            <Grid container justifyContent='center' alignItems='center' direction='column' item xs={4}>

                <Avatar src={Reacteur} className={classes.avatar} />

                <p className={classes.text}>
                    Les technos utilsés
                </p>
            </Grid>
            <Grid container justifyContent='center' alignItems='center' direction='column' item xs={4}>

                <Avatar src={Reacteur} className={classes.avatar} />

                <p className={classes.text}>
                    Les médias socials
                </p>
            </Grid>

        </Grid>
    )
}

export default ButtonCustom