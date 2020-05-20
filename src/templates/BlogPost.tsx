import React, { useMemo } from "react"
import { Box, Button, Grid, Typography } from "@material-ui/core"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/Seo"
import { App } from "../components/App"
import { MainLayout } from "../layouts/MainLayout"
import { normalizePost } from "../normalizers/post"
import { blogPostStyles } from "./BlogPost.styles"
import { PostAuthor } from "../components/Common/PostAuthor"
import { withStyles } from "@material-ui/core/styles"

export const CategoryButton = withStyles(theme => ({
  root: {
    cursor: "pointer",
    fontSize: 14,
    background: theme.palette.secondary.main,
    border: 0,
    borderRadius: 5,
    boxShadow: "none",
    color: theme.palette.text.secondary,
    padding: 0,
    "&:hover": {
      background: theme.palette.secondary.dark,
      boxShadow: "none",
    },
  },
}))(Button)

const BlogPostTemplate: React.FC<any> = ({ data }) => {
  const rawPostData = data.wordpressPost
  const postData = normalizePost(rawPostData, "wp")
  const classes = blogPostStyles()

  const post = useMemo(() => {
    return (
      <Grid container>
        <Grid item xs={12} sm={9} className={classes.contentWrapper}>
          <CategoryButton>{postData.mainCategory.name}</CategoryButton>
          <Typography
            variant={"h1"}
            color={"textPrimary"}
            className={classes.title}
          >
            {postData.title}
          </Typography>
          <Box className={classes.authorWrapper}>
            <PostAuthor
              authorName={postData.author.name}
              imageSource={postData.author.imageSource}
            />
          </Box>
          {postData.featuredImageSource && (
            <Box className={classes.mainImageWrapper}>
              <Img
                fluid={postData.featuredImageSource}
                className={classes.mainImage}
              />
            </Box>
          )}
          <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
      </Grid>
    )
  }, [postData])

  return (
    <App>
      <MainLayout>
        <SEO postData={postData} />
        {post}
      </MainLayout>
    </App>
  )
}
export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      ...wpPost
    }
  }
`
