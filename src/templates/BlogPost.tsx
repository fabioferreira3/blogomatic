import React, { useMemo } from "react"
import { Box, Button, Grid, Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/Seo"
import { App } from "../components/App"
import { MainLayout } from "../layouts/MainLayout"
import { PostAuthor } from "../components/Common/PostAuthor"
import { MiniPosts } from "../components/PostWrappers/MiniPosts"
import { useFeaturedPosts } from "../hooks/useFeaturedPosts"
import { normalizePost } from "../normalizers/post"
import { blogPostStyles } from "./BlogPost.styles"
import { SmallPostsHorizontal } from "../components/PostWrappers/SmallPostsHorizontal"
import "@wordpress/block-library/build-style/style.css"

export const CategoryButton = withStyles(theme => ({
  root: {
    cursor: "pointer",
    fontSize: 14,
    background: theme.palette.secondary.main,
    border: 0,
    borderRadius: 5,
    boxShadow: "none",
    color: theme.palette.text.secondary,
    padding: "5 10 5 10",
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
  const featuredPosts = useFeaturedPosts()

  const post = useMemo(() => {
    return (
      <Grid container>
        <Grid item xs={12} sm={9} className={classes.postWrapper}>
          <CategoryButton
            onClick={() => navigate(`/category/${postData.mainCategory.slug}`)}
          >
            {postData.mainCategory.name}
          </CategoryButton>
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
          <Grid
            container
            justify={"space-between"}
            className={classes.contentWrapper}
          >
            <Grid item xs={12} sm={3}>
              <Typography variant={"h3"} color={"textPrimary"}>
                Col
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography
                variant={"body1"}
                component={"div"}
                color={"textPrimary"}
              >
                <div dangerouslySetInnerHTML={{ __html: postData.content }} />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ padding: 20 }} xs={12} md={3}>
          <Typography variant={"h3"} color={"textPrimary"}>
            Latest posts
          </Typography>
          <Grid container style={{ marginTop: 30 }}>
            <MiniPosts posts={featuredPosts} />
          </Grid>
        </Grid>
        <Grid container item xs={12} style={{ padding: 25 }}>
          <Typography variant={"h3"} color={"textPrimary"}>
            More Posts
          </Typography>
          <Grid container>
            <SmallPostsHorizontal posts={featuredPosts} />
          </Grid>
        </Grid>
      </Grid>
    )
  }, [postData])

  return (
    <App>
      <MainLayout>
        <SEO pageData={postData} />
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
