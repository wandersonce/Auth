import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export default function Dashboard() {
  const {user} = useContext(AuthContext)
  return (
    <div>Dashboard: {user?.email}</div>
  )
}
