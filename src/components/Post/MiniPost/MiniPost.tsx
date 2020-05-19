import React, { useEffect } from "react"
import { Grid, Typography } from "@material-ui/core"
import ScheduleIcon from "@material-ui/icons/Schedule"
import Img from "gatsby-image"

import { miniPostStyles } from "./MiniPost.styles"

export const MiniPost: React.FC<any> = props => {
  const classes = miniPostStyles()

  const { featuredImageSource, lastUpdate, title } = props

  useEffect(() => {
    console.log(`MINI POST:: ${title} rendered`)
  })

  return (
    <Grid container style={{ marginBottom: 25, flexWrap: "nowrap" }}>
      <Grid item style={{ width: "60%", height: 80 }}>
        {featuredImageSource && (
          <Img
            fluid={featuredImageSource}
            style={{ width: "100%", height: "100%" }}
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
        <Typography variant={"body2"} style={{ fontSize: 14 }}>
          {lastUpdate.formated}
        </Typography>
        <Typography variant={"h4"}>{title}</Typography>
      </Grid>
    </Grid>
  )
}
