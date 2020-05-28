import React from "react"
import { Grid } from "@material-ui/core"

import Seo from "../components/Seo"
import { App } from "../components/App"
import { MainLayout } from "../layouts/MainLayout"
import { useFeaturedPosts } from "../hooks/useFeaturedPosts"
import { MiniPosts } from "../components/PostWrappers/MiniPosts"
import { HorizontalPosts } from "../components/PostWrappers/HorizontalPosts"
import { SquarePostsVertical } from "../components/PostWrappers/SquarePostsVertical"
import { SquarePostsHorizontal } from "../components/PostWrappers/SquarePostsHorizontal"
import { SmallPostsVertical } from "../components/PostWrappers/SmallPostsVertical"
import { SmallPostsHorizontal } from "../components/PostWrappers/SmallPostsHorizontal"
import { VerticalPosts } from "../components/PostWrappers/VerticalPosts"

const Index: React.FC<any> = () => {
  const featuredPosts = useFeaturedPosts()

  return (
    <App>
      <MainLayout>
        <Seo
          title={process.env.GATSBY_SITENAME}
          description={process.env.GATSBY_SITE_DESCRIPTION}
        />
        <Grid container justify={"center"}>
          <Grid item style={{ padding: 20 }} xs={12} md={3}>
            <SmallPostsVertical posts={featuredPosts} />
          </Grid>
          <Grid item style={{ padding: 20 }} xs={12} md={6}>
            <Grid container justify={"center"} direction={"column"}>
              <VerticalPosts posts={featuredPosts} />
            </Grid>
          </Grid>
          <Grid item style={{ padding: 20 }} xs={12} md={3}>
            <MiniPosts posts={featuredPosts} />
          </Grid>
        </Grid>
        <Grid container justify={"center"}>
          <Grid container item xs={12} sm={9}>
            <HorizontalPosts posts={featuredPosts} />
          </Grid>
          <Grid container item direction={"column"} xs={12} sm={3}>
            <SquarePostsVertical posts={featuredPosts} hasOverlay={true} />
          </Grid>
        </Grid>
        <Grid container>
          <SquarePostsHorizontal posts={featuredPosts} />
        </Grid>
        <Grid container style={{ paddingLeft: 20 }}>
          <SmallPostsHorizontal posts={featuredPosts} />
        </Grid>
      </MainLayout>
    </App>
  )
}

export default Index
