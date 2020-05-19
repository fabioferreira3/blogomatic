import React, { useEffect } from "react"
import { Grid, Typography } from "@material-ui/core"
import ScheduleIcon from "@material-ui/icons/Schedule"
import Img from "gatsby-image"

import { verticalSmallPostStyles } from "./VerticalSmallPost.styles"

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
          style={{ width: "100%", maxHeight: 160 }}
        />
      )}
      <Grid container alignItems={"center"} style={{ marginTop: 10 }}>
        <ScheduleIcon style={{ fontSize: 14 }} />
        <Typography variant={"body2"} style={{ fontSize: 14, marginLeft: 5 }}>
          {lastUpdate.formated}
        </Typography>
      </Grid>
      <Typography variant={"h3"} style={{ marginTop: 10, marginBottom: 10 }}>
        {title}
      </Typography>
    </Grid>
  )
}
