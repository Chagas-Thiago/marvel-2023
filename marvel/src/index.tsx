import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from './App'
import './index.css'

const transformMinutesToMilliseconds = (minutes: number) => {
  return 1000 * 60 * minutes
}

const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          cacheTime: transformMinutesToMilliseconds(20),
          staleTime: transformMinutesToMilliseconds(10),
      }
  }
})

ReactDOM.render(
  <BrowserRouter>
     <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </BrowserRouter >,
  document.getElementById("root")
)
