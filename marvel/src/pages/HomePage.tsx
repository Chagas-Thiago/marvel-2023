import { Grid } from '@material-ui/core'
import Background from '../components/background/background'
import ButtonCustom from '../components/button/button'
import Spider from "../assets/spiderman.gif"
import MySocialMedia from '../components/logocontainer/mySocialMedia'

const HomePage = () => {
    return (
        <Grid container >
            <Background />

            <Grid container justifyContent='center'>
                <p style={{

                    textAlign: "center",
                    color: "#B22234",
                    fontSize: 30,
                    fontWeight: "bold",
                    textShadow: "black 1px 0 2px"

                }}>This site is a project developed for Marvel API developers, featuring a list of characters and their corresponding comics.</p>
            </Grid>

            <ButtonCustom />
            <Grid container justifyContent='center'>
                <img src={Spider} alt="spider-man" />
            </Grid>
            <MySocialMedia />
        </Grid>
  )
}

export default HomePage