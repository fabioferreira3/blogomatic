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
      localFile {
        ...fluidHdImage
      }
    }
    modified
    tags {
      name
      slug
    }
    categories {
      slug
    }
  }
`
