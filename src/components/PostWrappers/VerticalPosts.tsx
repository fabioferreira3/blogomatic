import React from "react"

import VerticalPost from "../Post/VerticalPost/VerticalPost"

const VerticalPosts: React.FC<any> = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post: any) => {
          return <VerticalPost key={post.id} {...post} />
        })}
    </>
  )
}

export default VerticalPosts
