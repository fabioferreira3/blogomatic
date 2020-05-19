import React, { useEffect } from "react"
import { Avatar, Button, Grid, Typography } from "@material-ui/core"
import ScheduleIcon from "@material-ui/icons/Schedule"
import VisibilityIcon from "@material-ui/icons/Visibility"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import Img from "gatsby-image"

import { withStyles } from "@material-ui/core/styles"
import { verticalLargePostStyles } from "./VerticalLargePost.styles"

export const StyledButton = withStyles(theme => ({
  root: {
    background: theme.palette.secondary.main,
    maxWidth: 150,
    border: 0,
    borderRadius: 0,
    boxShadow: "none",
    "&:hover": {
      background: "transparent",
      boxShadow: "none",
    },
  },
}))(Button)

export const VerticalLargePost: React.FC<any> = props => {
  const { author, featuredImageSource, lastUpdate, title, summary } = props
  const classes = verticalLargePostStyles()

  useEffect(() => {
    console.log(`VERTICAL LARGE POST:: ${title} rendered`)
  })

  return (
    <Grid container direction={"column"} style={{ marginBottom: 25 }}>
      {featuredImageSource && (
        <Img
          fluid={featuredImageSource}
          style={{ width: "100%", maxHeight: 400 }}
        />
      )}
      <Grid container alignItems={"center"} style={{ marginTop: 10 }}>
        <ScheduleIcon style={{ fontSize: 14 }} />
        <Typography variant={"body2"} style={{ fontSize: 14, marginLeft: 5 }}>
          {lastUpdate.formated}
        </Typography>
      </Grid>
      <Typography variant={"h2"} style={{ marginTop: 10, marginBottom: 10 }}>
        {title}
      </Typography>

      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <Grid container alignItems={"center"} style={{ flexWrap: "nowrap" }}>
        <Grid container item alignItems={"center"}>
          <Avatar
            src={author.imageSource}
            classes={classes}
            style={{ width: 30, height: 30 }}
          />
          <Typography style={{ marginLeft: 10 }}>by {author.name}</Typography>
        </Grid>
        <Grid container item alignItems={"center"} justify={"flex-end"}>
          <VisibilityIcon style={{ fontSize: 16 }} />
          <Typography variant={"body2"} style={{ marginLeft: 5, fontSize: 16 }}>
            300
          </Typography>
          <FavoriteBorderIcon style={{ marginLeft: 15, fontSize: 16 }} />
          <Typography variant={"body2"} style={{ marginLeft: 5, fontSize: 16 }}>
            27
          </Typography>
        </Grid>
      </Grid>
      <StyledButton style={{ marginTop: 20 }}>Read More</StyledButton>
    </Grid>
  )
}
