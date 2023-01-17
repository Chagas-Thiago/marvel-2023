import CharsPageSection from '../pagesSections/CharsPagesSection'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Grid } from '@material-ui/core'
import { Idata } from '../utils/type'

function Home() {
  const apiKey = process.env.REACT_APP_KEY
  const getData = async () => {
    const { data } = await axios.get<Idata>(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`)
    return data.data
  }

  const { data: dataCharacter, isLoading } = useQuery(["getAllData"], getData)

  return isLoading ? null : (
    <Grid container justifyContent='center'>
      <Grid container item xs={10}>
        {dataCharacter?.results.map((value: any, index: number) =>
          <CharsPageSection data={value} key={index} />
        )}
      </Grid>
    </Grid>
  )
}

export default Home