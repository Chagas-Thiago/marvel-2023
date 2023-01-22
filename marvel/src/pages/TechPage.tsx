import React from 'react'
import AnimationReact from '../components/animationReact/animationReact'
import { techPng } from '../utils/techs'
import useStylesTechPage from "../styles/techPage.styles"
import { Grid, Tooltip } from '@material-ui/core'

const TechPage = () => {

  const classes = useStylesTechPage()

  return (

    <Grid container justifyContent='center'>

      <Grid container item xs={4} md={12} className={classes.containerImage}>
          {
            techPng.map((value =>
              <Tooltip
                classes={{ tooltip: classes.root }}
                title={value.toolType
                }>
                <img
                  className={classes.img}
                  alt={value.alt}
                  src={value.icon} />
              </Tooltip>
            ))
          }
        </Grid>
        {<AnimationReact />}
    </Grid>

  )
}

export default TechPage