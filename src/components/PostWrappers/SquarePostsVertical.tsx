import React from "react"

import Grid from "@material-ui/core/Grid"
import SquarePost from "../Post/SquarePost/SquarePost"

const SquarePostsVertical: React.FC<any> = ({ posts, hasOverlay }) => {
  return (
    <>
      {posts &&
        posts.map((post: any) => {
          return (
            <Grid key={post.id} item style={{ height: "25vh", padding: 20 }}>
              <SquarePost {...post} hasOverlay={hasOverlay} />
            </Grid>
          )
        })}
    </>
  )
}

export default SquarePostsVertical
