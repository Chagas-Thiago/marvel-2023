import React from "react";
import { Button, Grid, Input } from "@material-ui/core";
import useStyles from "../styles/headerPagesSection.styles";
import MarvelHeader from "../assets/marvel.jpg";

const HeaderPagesSection = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.containerHeader} container>
      <Grid
        style={{ backgroundImage: `url(${MarvelHeader})` }}
        className={classes.container}
      />
      <Grid item xs={4} className={classes.projectMarvelText}>
        Project Marvel
      </Grid>
      <Grid container className={classes.containerHeader} item xs={4}>
        <Input
          className={classes.input}
          id="outlined-basic"
          placeholder="Cherche ton personnage ici"
        />
        <Button className={classes.button}>Recherche</Button>
      </Grid>
    </Grid>
  );
};

export default HeaderPagesSection;
