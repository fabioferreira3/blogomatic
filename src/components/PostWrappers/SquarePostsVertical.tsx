import { Grid } from "@material-ui/core"
import { SquarePost } from "../Post/SquarePost/SquarePost"
import React from "react"

export const SquarePostsVertical: React.FC<any> = ({ posts, hasOverlay }) => {
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
