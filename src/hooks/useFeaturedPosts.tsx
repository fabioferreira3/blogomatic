import { graphql, useStaticQuery } from "gatsby"
import { normalizePosts } from "../normalizers/post"

export const useFeaturedPosts = () => {
  const rawFeaturedPostsData = useStaticQuery(graphql`
    query {
      allWordpressPost(
        filter: { sticky: { eq: true }, status: { eq: "publish" } }
      ) {
        nodes {
          ...wpPost
        }
      }
    }
  `)
  const featuredPostsData = normalizePosts(
    rawFeaturedPostsData.allWordpressPost.nodes,
    "wp"
  )
  return featuredPostsData
}
