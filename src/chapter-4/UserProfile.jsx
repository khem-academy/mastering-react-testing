import React, { useState, useEffect } from 'react'

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true)
      const response = await fetch(`https://api.example.com/users/${userId}`)
      const data = await response.json()
      setUser(data)
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

export default UserProfile
