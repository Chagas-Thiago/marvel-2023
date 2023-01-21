import React from 'react'
import { Button, Grid, Input } from "@material-ui/core"
import useStyles from '../styles/headerPagesSection.styles'
import MarvelHeader from "../assets/marvel.jpg"

const HeaderPagesSection = () => {
const classes = useStyles()

    return (
<Grid container justifyContent='space-around' style={{backgroundColor: "#3B3B3B"}}>
            <Grid style={{ backgroundImage: `url(${MarvelHeader})` }} className={classes.container} />
            <Grid item xs={4} style={{color:"white",textAlign:"center"}}>Project Marvel</Grid>
        <Grid container alignItems='center' style={{height:45}} item xs={4}>
              <Input
                  style={{height:35,borderRadius:5,width:"50%", backgroundColor: "#ffff" }}
                  id="outlined-basic"
                  placeholder="Cherche ton personnage ici"
                />
                <Button style={{marginLeft:"1%",height:35,backgroundColor:"#EE1C25",boxShadow:""}}>Recherche</Button>
        </Grid>
</Grid>
  )
}

export default HeaderPagesSection