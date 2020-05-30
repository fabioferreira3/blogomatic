import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Box, Grid, Typography } from "@material-ui/core"

import { authorBoxStyles } from "./AuthorBox.styles"
import { ShareActions } from "../Common/ShareActions"

export const AuthorBox: React.FC = () => {
  const classes = authorBoxStyles()

  const authorImageQuery = graphql`
    query {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  const authorImageData = useStaticQuery(authorImageQuery)

  return (
    <Grid
      container
      className={classes.authorDescriptionWrapper}
      direction={"column"}
    >
      <Grid container item wrap="nowrap" alignItems={"center"}>
        <Box className={classes.authorImageWrapper}>
          <Img
            fluid={authorImageData.file.childImageSharp.fluid}
            className={classes.authorImage}
          />
        </Box>
        <Typography variant={"body2"}>
          {process.env.GATSBY_AUTHOR_DESCRIPTION}
        </Typography>
      </Grid>
      <Grid container item justify={"flex-end"} style={{ marginTop: 20 }}>
        <ShareActions size={"small"} noColor={true} />
      </Grid>
    </Grid>
  )
}
