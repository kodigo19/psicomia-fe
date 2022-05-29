import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/landing/Navbar'

export const DashboardClient = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <div>Dashboard CLient</div>
    </>
  )
}
