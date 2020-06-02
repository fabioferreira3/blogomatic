import { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import _ from "lodash"

import { normalizePosts } from "../normalizers/post"
import { RootContext } from "../components/App"
import {processPostData} from "./posthooks.helper";

export const useLatestPosts = (ignore: any = [], limit: any = null) => {
    const { locale } = useContext(RootContext)
    const rawFeaturedPostsData = useStaticQuery(graphql`
    query {
      allWordpressPost(
        filter: { status: { eq: "publish" } }
        limit: 10
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          ...wpPost
        }
      }
    }
  `)
    let latestPostsData = normalizePosts(
        rawFeaturedPostsData.allWordpressPost.nodes,
        "wp",
        locale
    )
    return processPostData(latestPostsData, ignore, limit)
}
