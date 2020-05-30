import { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import _ from "lodash"

import { normalizePosts } from "../normalizers/post"
import { RootContext } from "../components/App"

export const useFeaturedPosts = (ignore: any = []) => {
  const { locale } = useContext(RootContext)
  const rawFeaturedPostsData = useStaticQuery(graphql`
    query {
      allWordpressPost(
        filter: { sticky: { eq: true }, status: { eq: "publish" } }
        limit: 6
        sort: { fields: date, order: DESC }
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
  if (ignore && featuredPostsData) {
    return _.filter(featuredPostsData, (featuredPost: any) => {
      return !_.includes(ignore, featuredPost.id)
    })
  }
  return featuredPostsData
}
