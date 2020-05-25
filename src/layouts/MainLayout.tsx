import React from "react"
import { Grid } from "@material-ui/core"
import { NavBar } from "../components/NavBar/NavBar"
import { Footer } from "../components/Footer/Footer"

export const MainLayout: React.FC = props => {
  return (
    <>
      <NavBar />
      <Grid container style={{ marginTop: 180 }}>{props.children}</Grid>
      <Footer />
    </>
  )
}
