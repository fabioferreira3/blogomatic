import React from "react"
import { NavBar } from "../components/NavBar/NavBar"

export const MainLayout: React.FC = props => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  )
}
