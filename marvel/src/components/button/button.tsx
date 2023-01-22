import useStylesButton from './button.styles'
import { Button, Grid } from '@material-ui/core'
import { Build } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'
const ButtonCustom = () => {
    const classes = useStylesButton()

    const navigate = useNavigate()
    return (


        <Button onClick={() => navigate('/techPage')} className={classes.button}>
            <Build className={classes.img} />

                <p className={classes.text}>
                Discover the technologies behind our project
                </p>

        </Button>



    )
}

export default ButtonCustom