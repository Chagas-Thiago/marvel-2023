import { Button, Grid } from '@material-ui/core'
import { socialLinks } from '../../utils/socialLinks'
import useStylesLogoContainer from '../logocontainer/logoContainer.styles';


const LogoContainer = () => {
    const classes = useStylesLogoContainer()
    return (
        <Grid style={{ position: "fixed" }}>
            {socialLinks.map(({ icon, alt, onClick }) => (
                <Grid item key={alt}>
                    <Button onClick={onClick}>

                            <img className={classes.img} src={icon} alt={alt} style={{ height: 50, width: 50 }} />

                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};

export default LogoContainer;