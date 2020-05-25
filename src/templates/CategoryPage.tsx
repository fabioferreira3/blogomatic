import React, { useContext } from "react"
import { Grid, Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { graphql } from "gatsby"

import { normalizePosts } from "../normalizers/post"
import { MainLayout } from "../layouts/MainLayout"
import { App, RootContext } from "../components/App"
import { HorizontalPosts } from "../components/PostWrappers/HorizontalPosts"
import { categoryPageStyles } from "./CategoryPage.styles"
import Seo from "../components/Seo"

const CategoryPageTemplate: React.FC<any> = ({ data }) => {
  const classes = categoryPageStyles()
  const { locale } = useContext(RootContext)
  const { name: categoryName, yoast_head: metaData } = data.wordpressCategory
  const posts = normalizePosts(data.allWordpressPost.nodes, "wp", locale)

  const CategoryHeader = withStyles(theme => ({
    root: {
      background: theme.palette.primary.main,
      color: theme.palette.text.secondary,
      padding: "5px 20px 5px 20px",
      borderRadius: 10,
      [theme.breakpoints.down("xs")]: {
        display: "block",
        textAlign: "center",
      },
    },
  }))(({ classes }: any) => (
    <Typography variant={"h1"} component={"span"} className={classes.root}>
      {categoryName}
    </Typography>
  ))

  return (
    <App>
      <MainLayout>
        <Seo title={categoryName} metaData={metaData} />
        <Grid container>
          <Grid item xs={12} className={classes.headerWrapper}>
            <CategoryHeader />
          </Grid>
          <Grid item xs={12} md={9} className={classes.categoryWrapper}>
            <HorizontalPosts posts={posts} />
          </Grid>
          <Grid item xs={12} md={3}></Grid>
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
      yoast_head
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
