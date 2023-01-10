import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Grid } from '@material-ui/core'
import MiddlePagesSection from '../pagesSections/MiddlePagesSection'

function Home() {

    const apiKey = process.env.REACT_APP_KEY
    const pageNbr = 20 

    const getData = async() => {
        const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=${pageNbr}&apikey=${apiKey}`)  
        return data.data.results
      }
      const {data} = useQuery(["getAllData"], getData) 

  return (
      <Grid>
          <MiddlePagesSection data={data} />
      </Grid>
  )
}

export default Home