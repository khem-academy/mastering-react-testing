import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UserProfileAxios = ({ userId }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true)
      const response = await axios.get(`https://api.example.com/users/${userId}`)
      setUser(response.data)
      setIsLoading(false)
    }

    fetchUser()
  }, [userId])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}

export default UserProfileAxios
