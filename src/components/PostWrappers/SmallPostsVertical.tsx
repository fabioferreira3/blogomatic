import React from "react"

import Grid from "@material-ui/core/Grid"

import SmallPost from "../Post/SmallPost/SmallPost"

const SmallPostsVertical: React.FC<any> = ({ posts }) => {
  return (
    <Grid container justify={"center"} direction={"column"}>
      {posts &&
        posts.map((post: any) => {
          return <SmallPost key={post.id} {...post} />
        })}
    </Grid>
  )
}

export default SmallPostsVertical
