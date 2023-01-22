import { Grid } from "@material-ui/core"
import useStyles from "../styles/headerPagesSection.styles"
import MarvelHeader from "../assets/marvel.jpg"

const HeaderPagesSection = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.containerHeader} container justifyContent="center">
      <div
        style={{ backgroundImage: `url(${MarvelHeader})` }}
        className={classes.container}
      />
    </Grid>
  );
};

export default HeaderPagesSection;
