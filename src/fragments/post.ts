import { graphql } from "gatsby"

export const wpPost = graphql`
  fragment wpPost on wordpress__POST {
    id
    content
    excerpt
    author {
      name
      avatar_urls {
        wordpress_96
      }
    }
    slug
    title
    featured_media {
      alt_text
      title
      localFile {
        ...fluidHdImage
      }
    }
    date
    modified
    tags {
      name
      slug
    }
    categories {
      slug
      name
    }
    yoast_head
  }
`
