import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

export default function Layout(props) {
  return (
    <>
      <Nav />
      <div>
        {props.children}
      </div>
      <Footer />
    </>
  )
}
