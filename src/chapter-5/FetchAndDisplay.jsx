import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from './List'

const FetchAndDisplay = ({ url }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url)
      setData(response.data)
    }
    fetchData()
  }, [url])

  return <List items={data} />
}

export default FetchAndDisplay
