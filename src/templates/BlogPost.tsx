import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/Seo"
import { App } from "../components/App"
import { MainLayout } from "../layouts/MainLayout"
import { normalizePost } from "../normalizers/post"

const BlogPostTemplate: React.FC<any> = ({ data }) => {
  const rawPostData = data.wordpressPost
  const postData = normalizePost(rawPostData, "wp")

  return (
    <App>
      <MainLayout>
        <SEO title={postData.title} postData={postData} />
        {postData.featuredImageSource && (
          <Img fluid={postData.featuredImageSource} />
        )}
        <h3
          style={{ fontSize: 33, marginTop: 0 }}
          dangerouslySetInnerHTML={{ __html: postData.title }}
        />
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </MainLayout>
    </App>
  )
}
export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      ...wpPost
    }
  }
`
