import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

interface IData {
  data: any
}
interface IToto{
  name: string
  resourceURI: string
  thumbnail:any
}
function App() {
  
  const apiKey = process.env.REACT_APP_KEY
  const pageNbr = 20 

  const getData = async() => {
    const { data } = await axios.get<IData>(`https://gateway.marvel.com:443/v1/public/characters?limit=${pageNbr}&apikey=${apiKey}`)  
    return data.data.results
  }
  const {data} = useQuery(["getAllData"], getData) 

  return (
    <div>
      {
        data?.map((value: IToto) => {
          console.log(value)
          return(
            <img alt="marvel" src={ value.thumbnail.path + "." + value.thumbnail.extension} style={{ height: 100, width: 100 }} />
          )
        })}
    </div>
  );
}

export default App;
