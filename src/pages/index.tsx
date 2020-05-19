import React from "react"
import { Grid } from "@material-ui/core"

import Seo from "../components/Seo"
import { App } from "../components/App"
import { MainLayout } from "../layouts/MainLayout"
import { useFeaturedPosts } from "../hooks/useFeaturedPosts"
import { VerticalLargePost } from "../components/Post/VerticalLargePost/VerticalLargePost"
import { VerticalSmallPost } from "../components/Post/VerticalSmallPost/VerticalSmallPost"
import { MiniPost } from "../components/Post/MiniPost/MiniPost"
import { HorizontalPost } from "../components/Post/HorizontalPost/HorizontalPost"
import { SquarePost } from "../components/Post/SquarePost/SquarePost"

export default () => {
  const featuredPosts = useFeaturedPosts()

  return (
    <App>
      <MainLayout>
        <Seo title="Home" />
        <Grid container justify={"center"} style={{ marginTop: 160 }}>
          <Grid item style={{ padding: 20 }} xs={12} md={3}>
            <Grid container justify={"center"} direction={"column"}>
              {featuredPosts &&
                featuredPosts.map((post: any) => {
                  return <VerticalSmallPost key={post.id} {...post} />
                })}
            </Grid>
          </Grid>
          <Grid item style={{ padding: 20 }} xs={12} md={6}>
            <Grid container justify={"center"} direction={"column"}>
              {featuredPosts &&
                featuredPosts.map((post: any) => {
                  return <VerticalLargePost key={post.id} {...post} />
                })}
            </Grid>
          </Grid>
          <Grid item style={{ padding: 20 }} xs={12} md={3}>
            <Grid container justify={"center"} direction={"column"}>
              {featuredPosts &&
                featuredPosts.map((post: any) => {
                  return <MiniPost key={post.id} {...post} />
                })}
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify={"center"}>
          <Grid
            container
            item
            direction={"column"}
            style={{ padding: 20 }}
            xs={12}
            sm={9}
          >
            {featuredPosts &&
              featuredPosts.map((post: any) => {
                return <HorizontalPost key={post.id} {...post} />
              })}
          </Grid>
          <Grid
            container
            direction={"column"}
            item
            style={{ padding: 20 }}
            xs={12}
            sm={3}
          >
            {featuredPosts &&
              featuredPosts.map((post: any) => {
                return <SquarePost key={post.id} {...post} />
              })}
          </Grid>
        </Grid>
      </MainLayout>
    </App>
  )
}
