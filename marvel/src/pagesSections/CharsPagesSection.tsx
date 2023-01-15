import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Grid } from '@material-ui/core'
import CardChars from '../components/cards/cardChars'
import { Idata } from '../utils/type'

const CharsPageSection = () => {
  const apiKey = process.env.REACT_APP_KEY

  const getData = async () => {
    const { data } = await axios.get<Idata>(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`)
    return data.data
  }



  const { data: dataCharacter, isLoading } = useQuery(["getAllData"], getData)

  return isLoading ? null : (

    <Grid container item xs={10} style={{ marginTop: "1%" }}>

      {dataCharacter?.results.map((value =>
        <CardChars
          thumbnail={value.thumbnail.path + '.' + value.thumbnail.extension}
          description={value.description}
          name={value.name} onClick={undefined} />
      ))
      }
    </Grid>

  )
}

export default CharsPageSection