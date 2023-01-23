import { Button, Grid } from '@material-ui/core'
import { socialLinks } from '../../utils/socialLinks'
import useStylesMySocialMedia from './mySocialMedia.styles';


const MySocialMedia = () => {
    const classes = useStylesMySocialMedia()
    return (
        <Grid className={classes.containerSocialLinks}>
            {socialLinks.map(({ icon, alt, onClick }) => (
                <Grid item key={alt}>
                    <Button onClick={onClick}>

                        <img className={classes.img} src={icon} alt={alt} />

                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};

export default MySocialMedia;