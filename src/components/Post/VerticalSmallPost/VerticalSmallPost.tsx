import React, { useEffect } from "react"
import { Grid, Typography } from "@material-ui/core"
import Img from "gatsby-image"

import { verticalSmallPostStyles } from "./VerticalSmallPost.styles"
import { PostTimestamp } from "../../Common/PostTimestamp"

export const VerticalSmallPost: React.FC<any> = props => {
  const classes = verticalSmallPostStyles()

  const { featuredImageSource, lastUpdate, title } = props

  useEffect(() => {
    console.log(`VERTICAL SMALL POST:: ${title} rendered`)
  })

  return (
    <Grid container direction={"column"} style={{ marginBottom: 25 }}>
      {featuredImageSource && (
        <Img
          fluid={featuredImageSource}
          style={{ width: "100%", maxHeight: 160, borderRadius: 10 }}
        />
      )}
      <Grid container alignItems={"center"} style={{ marginTop: 10 }}>
        <PostTimestamp date={lastUpdate.formated} displayIcon={true} />
      </Grid>
      <Typography variant={"h3"} style={{ marginTop: 10, marginBottom: 10 }}>
        {title}
      </Typography>
    </Grid>
  )
}
