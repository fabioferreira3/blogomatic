import { graphql, useStaticQuery } from "gatsby"
import { normalizePosts } from "../normalizers/post"
import { useContext } from "react"
import { RootContext } from "../components/App"

export const useFeaturedPosts = () => {
  const { locale } = useContext(RootContext);
  const rawFeaturedPostsData = useStaticQuery(graphql`
    query {
      allWordpressPost(
        filter: { sticky: { eq: true }, status: { eq: "publish" } }
        limit: 3
        sort: { fields: modified, order: DESC }
      ) {
        nodes {
          ...wpPost
        }
      }
    }
  `)
  const featuredPostsData = normalizePosts(
    rawFeaturedPostsData.allWordpressPost.nodes,
    "wp",
    locale
  )
  return featuredPostsData
}
