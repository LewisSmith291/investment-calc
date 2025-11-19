import React from 'react'
import logo from '../assets/logo.png'

function Header(props) {
  return (
    <header id="header">
      <h1>{props.title}</h1>
      <img src={logo} alt="Investment Calculator Logo"/>
    </header>
  )
}

export default Header
