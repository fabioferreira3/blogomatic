import React from "react"
import { VerticalPost } from "../Post/VerticalPost/VerticalPost"

export const VerticalPosts: React.FC<any> = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post: any) => {
          return <VerticalPost key={post.id} {...post} />
        })}
    </>
  )
}
