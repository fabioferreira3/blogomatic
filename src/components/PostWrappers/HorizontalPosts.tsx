import React from "react"
import Grid from "@material-ui/core/Grid"

import HorizontalPost from "../Post/HorizontalPost/HorizontalPost"

const HorizontalPosts: React.FC<any> = ({ posts }) => {
  return (
    <Grid container item direction={"column"} style={{ padding: 20 }}>
      {posts &&
        posts.map((post: any) => {
          return <HorizontalPost key={post.id} {...post} />
        })}
    </Grid>
  )
}

export default HorizontalPosts
