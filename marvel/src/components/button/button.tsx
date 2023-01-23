import useStylesButton from './button.styles'
import { Button, Grid } from '@material-ui/core'
// import { Build } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'
const ButtonCustom = () => {
    const classes = useStylesButton()

    const navigate = useNavigate()
    return (

        <>


            <Grid container justifyContent='center' item xs={12}>
        <Button onClick={() => navigate('/techPage')} className={classes.button}>
                    {/* <Build className={classes.img} /> */}

                <p className={classes.text}>
                        Discover the technologies behind the project
                </p>

                </Button>
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
                <Button style={{ width: "10%", backgroundColor: "#FF2800", boxShadow: '0px 0px 6px 0px #FF2800' }} onClick={() => navigate('/charPage')} className={classes.button}>
                    {/* <Build className={classes.img} /> */}

                    <p className={classes.text}>
                        ENTER
                    </p>

                </Button>
            </Grid>
        </>


    )
}

export default ButtonCustom