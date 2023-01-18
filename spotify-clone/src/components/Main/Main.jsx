import React from 'react'
import MainContent from './MainContent'
import NavBar from '../Navbar/NavBar'

const Main = () => {
  return (
    <div className="container-fluid g-0 main-bar changing-bg d-inline-flex flex-wrap">
        <NavBar/>
        <MainContent/>
    </div>
  )
}

export default Main