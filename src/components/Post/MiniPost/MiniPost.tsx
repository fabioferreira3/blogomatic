import React, { useEffect } from "react"
import { Grid, Typography } from "@material-ui/core"
import Img from "gatsby-image"

import { miniPostStyles } from "./MiniPost.styles"
import { PostTimestamp } from "../../Common/PostTimestamp"

export const MiniPost: React.FC<any> = props => {
  const classes = miniPostStyles()
  const { featuredImageSource, lastUpdate, title } = props

  useEffect(() => {
    console.log(`MINI POST:: ${title} rendered`)
  })

  return (
    <Grid container wrap={"nowrap"} justify={"center"}>
      <Grid item style={{ width: "60%", height: 80 }}>
        {featuredImageSource && (
          <Img
            fluid={featuredImageSource}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        )}
      </Grid>
      <Grid
        container
        item
        direction={"column"}
        alignItems={"flex-start"}
        style={{ paddingLeft: 13 }}
      >
        <PostTimestamp date={lastUpdate.formated} />
        <Typography variant={"h4"} color={"textPrimary"}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  )
}
