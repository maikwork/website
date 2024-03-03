import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PathRoutes } from './constant'
import { Home } from './Home'
import { Contact } from './Contact'
import { Project } from './Project'
import { Layout } from './Layout/Layout'

export function Routers() {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path={PathRoutes.home} element={<Home />} />
            <Route path={PathRoutes.project} element={<Project />} />
            <Route path={PathRoutes.contact} element={<Contact />} /> 
        </Route>
    </Routes>
  )
}
