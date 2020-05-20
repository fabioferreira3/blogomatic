import React from "react"
import { Grid } from "@material-ui/core"

import { HorizontalPost } from "../Post/HorizontalPost/HorizontalPost"

export const HorizontalPosts: React.FC<any> = ({ posts }) => {
  return (
    <Grid container item direction={"column"} style={{ padding: 20 }}>
      {posts &&
        posts.map((post: any) => {
          return <HorizontalPost key={post.id} {...post} />
        })}
    </Grid>
  )
}
