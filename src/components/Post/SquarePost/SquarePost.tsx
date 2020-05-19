import React, { useEffect } from "react"
import { Grid, Typography } from "@material-ui/core"
import ScheduleIcon from "@material-ui/icons/Schedule"
import Img from "gatsby-image"
import { squarePostStyles } from "./SquarePost.styles"

export const SquarePost: React.FC<any> = props => {
  const { featuredImageSource, lastUpdate, title } = props
  const classes = squarePostStyles()

  useEffect(() => {
    console.log(`SQUARE POST:: ${title} rendered`)
  })

  return (
    <Grid container style={{ marginBottom: 25 }}>
      <Grid item xs={12} style={{ position: "relative" }}>
        {featuredImageSource && (
          <>
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: 1,
                background: "black",
                opacity: 0.4,
              }}
            />
            <Img
              fluid={featuredImageSource}
              className={classes.mainImage}
              style={{ paddingBottom: "50%" }}
            />
          </>
        )}
        <Typography
          variant={"h4"}
          style={{
            position: "absolute",
            left: 10,
            bottom: 10,
            zIndex: 1,
            color: "white",
          }}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  )
}
