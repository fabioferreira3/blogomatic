import React from "react"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Img from "gatsby-image"
import { Link, navigate } from "gatsby"
import parse from "html-react-parser"

import miniPostStyles from "./MiniPost.styles"
import PostTimestamp from "../../Common/PostTimestamp"

const MiniPost: React.FC<any> = props => {
  const classes = miniPostStyles()
  const { featuredImage, createdAt, slug, title } = props

  return (
    <Grid container wrap={"nowrap"} justify={"center"}>
      <Grid item style={{ width: "60%", height: 80 }}>
        {featuredImage && (
          <Box
            className={classes.mainImageWrapper}
            onClick={() => navigate(slug)}
          >
            <Img
              fluid={featuredImage.imageSource}
              alt={featuredImage.alt}
              title={featuredImage.title}
              className={classes.mainImage}
            />
          </Box>
        )}
      </Grid>
      <Grid
        container
        item
        direction={"column"}
        alignItems={"flex-start"}
        style={{ paddingLeft: 13 }}
      >
        <PostTimestamp date={createdAt.formated} />
        <Link to={`/${slug}`} className={classes.link}>
          <Typography
            variant={"h4"}
            className={classes.title}
            color={"textPrimary"}
          >
            {parse(title)}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  )
}

export default MiniPost
