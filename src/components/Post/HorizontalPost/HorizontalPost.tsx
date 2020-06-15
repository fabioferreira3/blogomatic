import React, { useContext } from "react"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Link, navigate } from "gatsby"
import Img from "gatsby-image"
import parse from "html-react-parser"

import horizontalPostStyles from "./HorizontalPost.styles"
import PostActionButton from "../../Common/PostActionButton"
import PostTimestamp from "../../Common/PostTimestamp"
import PostAuthor from "../../Common/PostAuthor"
import { RootContext } from "../../App"

const HorizontalPost: React.FC<any> = props => {
  const { author, featuredImage, createdAt, slug, summary, title } = props
  const { textContent } = useContext(RootContext)
  const classes = horizontalPostStyles()

  return (
    <Grid container item className={classes.wrapper}>
      <Grid item xs={12} sm={6}>
        {featuredImage && (
          <Box
            className={classes.mainImageWrapper}
            onClick={() => navigate(slug)}
          >
            <Img fluid={featuredImage.imageSource} className={classes.mainImage} alt={featuredImage.alt} title={featuredImage.title} />
          </Box>
        )}
      </Grid>
      <Grid container xs={12} sm={6} item className={classes.contentWrapper}>
        <Grid container alignItems={"center"} className={classes.timestampWrapper}>
          <PostTimestamp date={createdAt.formated} displayIcon={true} />
        </Grid>
        <Grid container direction={"column"}>
          <Link to={`/${slug}`} className={classes.link}>
            <Typography
              variant={"h2"}
              color={"textPrimary"}
              className={classes.title}
            >
              {parse(title)}
            </Typography>
          </Link>
          <Typography variant={"body1"} component={"div"} color={"textPrimary"}>
            <Box>{parse(summary)}</Box>
          </Typography>
        </Grid>

        <PostAuthor
          authorName={author.name}
          imageSource={author.imageSource}
          likeCount={"300"}
          viewCount={"135"}
        />
        <PostActionButton
          style={{ marginTop: 20 }}
          onClick={() => navigate(slug)}
        >
          {textContent.READ_MORE}
        </PostActionButton>
      </Grid>
    </Grid>
  )
}

export default HorizontalPost
