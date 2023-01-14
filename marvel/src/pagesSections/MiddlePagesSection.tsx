import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Grid, Typography } from '@material-ui/core'
import useStylesCards from '../components/cards/cards.styles'
interface ICharacter {
  thumbnail: { extension: string, path: string }
  name: string
  description: string
}

interface Idata {
  data: { results: ICharacter[] }
}

const MiddlePagesSection = () => {
  const apiKey = process.env.REACT_APP_KEY

  const getData = async () => {
    const { data } = await axios.get<Idata>(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`)
    return data.data
  }

  const classes = useStylesCards()


  const { data: dataCharacter, isLoading } = useQuery(["getAllData"], getData)
  console.log(dataCharacter?.results.filter((fil => fil.description.length > 0)))
  return isLoading ? null : (
    <Grid container justifyContent='center'>
      <Grid container justifyContent='center' item xs={10} style={{ marginTop: "1%" }}>

        {dataCharacter?.results.map((value =>
          <Grid className={classes.containerCards} container item xs={3}>


            <img alt=""
              className={classes.img}
              src={value.thumbnail.path + '.' + value.thumbnail.extension} />
            <Typography component={"p"} className={classes.typography}>
              {value.description}
            </Typography>


            <Grid component={"div"} className={classes.face1} >
              {value.name}
            </Grid>

          </Grid>
        ))
        }
      </Grid>
    </Grid>
  )
}

export default MiddlePagesSection