import React from 'react'
import { Box } from '../../shared/ui/Box'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  return (
    <Box>
        <Header />
        <Outlet />
        <Footer />
    </Box>
  )
}
