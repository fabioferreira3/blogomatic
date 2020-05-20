import React from "react"
import { Grid } from "@material-ui/core"
import { SmallPost } from "../Post/SmallPost/SmallPost"

export const SmallPostsHorizontal: React.FC<any> = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post: any) => {
          return (
            <Grid
              key={post.id}
              item
              xs={12}
              sm={4}
              md={3}
              style={{
                paddingRight: 20,
                paddingTop: 20,
              }}
            >
              <SmallPost {...post} hasOverlay={true} />
            </Grid>
          )
        })}
    </>
  )
}
