import { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { normalizePosts } from "../normalizers/post"
import { RootContext } from "../components/App"
import processPostData from "./posthooks.helper";

const useFeaturedPosts = (ignore: any = [], limit: any = null) => {
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
  return processPostData(featuredPostsData, ignore, limit)
  // if (ignore && featuredPostsData) {
  //   return _.filter(featuredPostsData, (featuredPost: any) => {
  //     return !_.includes(ignore, featuredPost.id)
  //   })
  // }
  // return featuredPostsData
}

export default useFeaturedPosts
