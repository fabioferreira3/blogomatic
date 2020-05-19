import React, { useEffect } from "react"
import { Typography } from "@material-ui/core"
import Img from "gatsby-image"
import { squarePostStyles } from "./SquarePost.styles"
import { BlackOverlay } from "../../Common/BlackOverlay"

export const SquarePost: React.FC<any> = props => {
  const { featuredImageSource, title, hasOverlay } = props
  const classes = squarePostStyles()

  useEffect(() => {
    console.log(`SQUARE POST:: ${title} rendered`)
  })

  return (
    <div className={classes.wrapper}>
      {featuredImageSource && (
        <>
          {hasOverlay && <BlackOverlay />}
          <Img fluid={featuredImageSource} className={classes.mainImage} />
        </>
      )}
      <Typography variant={"h3"} className={classes.title}>
        {title}
      </Typography>
    </div>
  )
}
