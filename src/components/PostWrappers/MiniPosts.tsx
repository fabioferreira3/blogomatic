import React from "react"

import Grid from "@material-ui/core/Grid"
import MiniPost from "../Post/MiniPost/MiniPost"

const MiniPosts: React.FC<any> = props => {
  const { posts } = props
  return (
    <Grid container justify={"center"} direction={"column"}>
      {posts &&
        posts.map((post: any) => (
          <Grid item key={post.id} style={{ marginBottom: 20 }}>
            <MiniPost {...post} />
          </Grid>
        ))}
    </Grid>
  )
}

export default MiniPosts
