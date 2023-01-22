import CharsPageSection from '../pagesSections/CharsPagesSection'
import React, { useCallback, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Grid } from '@material-ui/core'
import { Idata } from '../utils/type'
import PaginationButtons from '../components/paginationButtons/paginationButtons'
import LogoContainer from '../components/logocontainer/logoContainer'
import ButtonCustom from '../components/button/button'
import Background from '../components/background/background'

function Home() {
  const [pagination, setPagination] = useState(8)

  const apiKey = process.env.REACT_APP_KEY

  const getData = useCallback(async () => {
    const { data } = await axios.get<Idata>(`https://gateway.marvel.com:443/v1/public/characters?limit=${pagination}&apikey=${apiKey}`)
    return data.data
  }, [apiKey, pagination])


  const { data: dataCharacter, isLoading, refetch } = useQuery(["getAllData"], getData, {
    onError: (error: Error) => {
      console.log(error)
    }
  })

  useEffect(() => {
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination])

  return isLoading ? null : (
    <>
      <Background />
      <Grid container justifyContent="center">
        <ButtonCustom />
      </Grid>

      <Grid container justifyContent='center'>

        <Grid container justifyContent='flex-start' item xs={1}>
          <LogoContainer />
        </Grid>
        <Grid container item xs={10}>
          {dataCharacter?.results.map((value, index: number) =>
            <CharsPageSection data={value} key={index} />
          )}
        </Grid>
        <PaginationButtons
          setPagination={setPagination} pagination={pagination} />
      </Grid>
    </>
  )
}

export default Home