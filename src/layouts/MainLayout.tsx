import React from "react"
import { NavBar } from "../components/NavBar/NavBar"
import { Footer } from "../components/Footer/Footer"

export const MainLayout: React.FC = props => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer/>
    </>
  )
}
