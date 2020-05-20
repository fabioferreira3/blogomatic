import React from "react"
import { Grid } from "@material-ui/core"

import { SmallPost } from "../Post/SmallPost/SmallPost"

export const SmallPostsVertical: React.FC<any> = ({ posts }) => {
  return (
    <Grid container justify={"center"} direction={"column"}>
      {posts &&
        posts.map((post: any) => {
          return <SmallPost key={post.id} {...post} />
        })}
    </Grid>
  )
}
