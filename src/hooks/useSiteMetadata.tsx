import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const siteMetadata = useStaticQuery(graphql`
    query {
      wordpressSiteMetadata {
        name
        description
        url
        home
      }
    }
  `)

  return siteMetadata.wordpressSiteMetadata
}
