import React from "react"
import Grid from "@material-ui/core/Grid"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import NavigateToTop from "../components/Common/NavigateToTop"

const MainLayout: React.FC = props => {
  return (
    <>
      <NavigateToTop />
      <NavBar />
      <Grid container style={{ marginTop: 180 }}>
        {props.children}
      </Grid>
      <Footer />
    </>
  )
}

export default MainLayout
