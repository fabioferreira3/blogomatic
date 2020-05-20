import React from "react"
import { Box } from "@material-ui/core"
import { NavBar } from "../components/NavBar/NavBar"
import { Footer } from "../components/Footer/Footer"

export const MainLayout: React.FC = props => {
  return (
    <>
      <NavBar />
      <Box style={{ marginTop: 180 }}>{props.children}</Box>
      <Footer />
    </>
  )
}
