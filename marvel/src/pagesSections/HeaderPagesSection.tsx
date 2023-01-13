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
      <Grid container justifyContent="center" alignItems="center" style={{ height: "8vh" }}>
        <Grid item xs={6} className={classes.projectMarvelText}>
          fariachagas@hotmail.com
      </Grid>
        <Grid container className={classes.containerHeader} item xs={6}>
        <Input
          className={classes.input}
          id="outlined-basic"
          placeholder="Cherche ton personnage ici"
        />
        <Button className={classes.button}>Recherche</Button>
      </Grid>
    </Grid>
    </Grid>
  );
};

export default HeaderPagesSection;
