import React from "react"
import Grid from "@material-ui/core/Grid"
import SquarePost from "../Post/SquarePost/SquarePost"

const SquarePostsHorizontal: React.FC<any> = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post: any) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{ padding: 20, height: "50vh" }}
              key={post.id}
            >
              <SquarePost {...post} hasOverlay={true} />
            </Grid>
          )
        })}
    </>
  )
}

export default SquarePostsHorizontal
