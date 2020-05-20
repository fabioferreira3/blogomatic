import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { graphql } from "gatsby"

import { normalizePosts } from "../normalizers/post"
import { MainLayout } from "../layouts/MainLayout"
import { App } from "../components/App"
import { HorizontalPosts } from "../components/PostWrappers/HorizontalPosts"
import { categoryPageStyles } from "./CategoryPage.styles"

const CategoryPageTemplate: React.FC<any> = ({ data }) => {
  const classes = categoryPageStyles()
  const categoryName = data.wordpressCategory.name
  const posts = normalizePosts(data.allWordpressPost.nodes, "wp")

  const CategoryHeader = withStyles(theme => ({
    root: {
      background: theme.palette.primary.main,
      color: "#fff",
      padding: "10px 30px 10px 30px",
      borderRadius: 10,
    },
  }))(({ classes }: any) => (
    <Typography variant={"h1"}>
      <span className={classes.root}>{categoryName}</span>
    </Typography>
  ))

  return (
    <App>
      <MainLayout>
        <Grid container>
          <Grid item xs={12} className={classes.headerWrapper}>
            <CategoryHeader />
          </Grid>
          <Grid item xs={12} sm={9} className={classes.categoryWrapper}>
            <HorizontalPosts posts={posts} />
          </Grid>
          <Grid item xs={12} sm={3}></Grid>
        </Grid>
      </MainLayout>
    </App>
  )
}

export default CategoryPageTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressCategory(wordpress_id: { eq: $id }) {
      name
    }
    allWordpressPost(
      filter: { categories: { elemMatch: { wordpress_id: { eq: $id } } } }
    ) {
      nodes {
        ...wpPost
      }
    }
  }
`
