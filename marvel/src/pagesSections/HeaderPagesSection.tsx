import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "../styles/headerPagesSection.styles";
import MarvelHeader from "../assets/marvel.jpg";
import ButtonCustom from "../components/button/button";

const HeaderPagesSection = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.containerHeader} container>
      <div
        style={{ backgroundImage: `url(${MarvelHeader})` }}
        className={classes.container}
      />
      <ButtonCustom />

    </Grid>
  );
};

export default HeaderPagesSection;
