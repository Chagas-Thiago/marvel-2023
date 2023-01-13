import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Grid } from '@material-ui/core'

interface ICharacter {
  thumbnail: { extension: string, path: string }
  name: string
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

  const { data: dataCharacter, isLoading } = useQuery(["getAllData"], getData)
  console.log(dataCharacter)
  return isLoading ? null : (
    <Grid container justifyContent='center'>
      <Grid container justifyContent='center' item xs={10} style={{ marginTop: "1%" }}>
        {dataCharacter?.results.map((value =>
          <Grid container justifyContent='center' item xs={3}>
            <img alt=""
              style={{ marginBottom: "5%", height: 350, width: "90%", boxShadow: "0px 0px 9px 2px grey" }}
              src={value.thumbnail.path + '.' + value.thumbnail.extension} />
          </Grid>
        ))
        }
      </Grid>
    </Grid>
  )
}

export default MiddlePagesSection