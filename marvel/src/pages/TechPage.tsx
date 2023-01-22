import React from 'react'
import AnimationReact from '../components/animationReact/animationReact'
import { techPng } from '../utils/techs'
import useStylesTechPage from "../styles/techPage.styles"
import { Grid, Tooltip } from '@material-ui/core'
import { CSSTransition } from 'react-transition-group'

const TechPage = () => {

  const classes = useStylesTechPage()

  return (
    <CSSTransition classNames="bounce" in={true} timeout={500}>
      <div>

        <Grid container className={classes.containerImage}>
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
      </div>
    </CSSTransition>
  )
}

export default TechPage