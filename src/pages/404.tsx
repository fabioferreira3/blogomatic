import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Seo from "../components/Seo"
import MainLayout from "../layouts/MainLayout"
import App from "../components/App"

const NotFoundPage: React.FC<any> = () => {

  return (
    <App>
      <MainLayout>
        <Seo title="404: Não encontrado" />
        <Grid container justify={"center"}>
          <Typography variant={"h1"}>Página não encontrada</Typography>
        </Grid>
      </MainLayout>
    </App>
  )
}

export default NotFoundPage;
