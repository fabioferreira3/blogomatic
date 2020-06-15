import React from "react"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import parse from "html-react-parser"

import SEO from "../components/Seo"
import App from "../components/App"
import MainLayout from "../layouts/MainLayout"
import PostAuthor from "../components/Common/PostAuthor"
import MiniPosts from "../components/PostWrappers/MiniPosts"
import useFeaturedPosts from "../hooks/useFeaturedPosts"
import { normalizePost } from "../normalizers/post"
import blogPostStyles from "./BlogPost.styles"
import SmallPostsHorizontal from "../components/PostWrappers/SmallPostsHorizontal"
import SimuladorPoupanca from "../components/Specific/SimuladorPoupanca"
import AuthorBox from "../components/Author/AuthorBox"
import ShareActions from "../components/Common/ShareActions"

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

const BlogPostTemplate: React.FC<any> = props => {
  const { data, pageContext } = props
  const { textContent, locale } = pageContext
  const rawPostData = data.wordpressPost
  const postData: any = normalizePost(rawPostData, "wp", locale)
  const classes = blogPostStyles()
  const featuredPosts = useFeaturedPosts([postData.id])

  return (
    <App>
      <MainLayout>
        <SEO metaData={postData.yoastHead} />

        {postData.slug === "simulador-de-poupanca" && <SimuladorPoupanca />}
        <Grid container>
          <Grid container item xs={12} md={9} className={classes.postWrapper}>
            <Grid container direction={"column"}>
              <Box>
                <CategoryButton
                  onClick={() =>
                    navigate(`/category/${postData.mainCategory.slug}`)
                  }
                >
                  {postData.mainCategory.name}
                </CategoryButton>
              </Box>
              <Typography
                variant={"h1"}
                color={"textPrimary"}
                className={classes.title}
              >
                {parse(postData.title)}
              </Typography>
              <Box className={classes.authorWrapper}>
                <PostAuthor
                  authorName={postData.author.name}
                  imageSource={postData.author.imageSource}
                />
              </Box>
              {postData.featuredImage && (
                <Box className={classes.mainImageWrapper}>
                  <Img
                    fluid={postData.featuredImage.imageSource}
                    alt={postData.featuredImage.alt}
                    title={postData.featuredImage.title}
                    className={classes.mainImage}
                  />
                </Box>
              )}
            </Grid>

            <Grid
              container
              justify={"space-between"}
              className={classes.contentWrapper}
            >
              <Grid item xs={12} md={3} style={{ position: "relative" }}>
                <Box className={classes.socialWrapper}>
                  <ShareActions size={"medium"} />
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography
                  variant={"body1"}
                  component={"div"}
                  color={"textPrimary"}
                >
                  <Box>{parse(postData.content)}</Box>
                  <AuthorBox />
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            style={{ padding: 20 }}
            xs={12}
            md={3}
            direction={"column"}
          >
            <Typography variant={"h3"} color={"textPrimary"}>
              {textContent.LATEST_POSTS}
            </Typography>
            <Grid item style={{ marginTop: 30 }}>
              <MiniPosts posts={featuredPosts} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} style={{ padding: 25 }}>
          <Typography variant={"h3"} color={"textPrimary"}>
            {textContent.MORE_POSTS}
          </Typography>
          <Grid container>
            <SmallPostsHorizontal posts={featuredPosts} />
          </Grid>
        </Grid>
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
