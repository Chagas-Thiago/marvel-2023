import React from 'react'
import { Grid } from '@material-ui/core'
import CardChars from '../components/cards/cardChars'
import { ICharacter } from '../utils/type'
// import { ICharacter } from '../utils/type'

export interface ICharCard {
  data: ICharacter
}
const CharsPageSection = (data: ICharCard, key: number) => {
  const { thumbnail, description, name, id } = data.data

  return (

    <Grid container justifyContent='center' key={key} item xs={3} style={{ marginTop: "1%" }}>

      <CardChars
        thumbnail={thumbnail.path + '.' + thumbnail.extension}
        description={description}
        name={name}
        id={id}
      />

    </Grid>


  )
}

export default CharsPageSection