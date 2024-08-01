import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {


  return (
    <>
     
    <Header/>
    <Slider/>
    <Content/>
    <Footer/>
    </>
  )
}

export default App
