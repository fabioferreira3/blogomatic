import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
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

export default useSiteMetadata
