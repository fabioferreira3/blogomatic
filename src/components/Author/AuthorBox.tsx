import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Box, Grid, Typography } from "@material-ui/core"

import { authorBoxStyles } from "./AuthorBox.styles"

export const AuthorBox: React.FC = () => {
  const classes = authorBoxStyles();

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
  const authorImageData = useStaticQuery(authorImageQuery);

  return (
    <Grid container wrap="nowrap" alignItems={"center"} className={classes.authorDescriptionWrapper}>
      <Box className={classes.authorImageWrapper}>
        <Img fluid={authorImageData.file.childImageSharp.fluid} className={classes.authorImage}/>
      </Box>
      <Typography
        variant={"body2"}>
        {process.env.GATSBY_AUTHOR_DESCRIPTION}
      </Typography>
    </Grid>
  )
}
