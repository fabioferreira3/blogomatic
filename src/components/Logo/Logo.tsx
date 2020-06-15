import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Logo: React.FC<any> = () => {
  const rawImageLogoData = useStaticQuery(graphql`
    query {
      wordpressWpLogo {
        url {
          localFile {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 90, quality: 60) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const logoImage = rawImageLogoData.wordpressWpLogo.url.localFile

  return (
    <Img fluid={logoImage.childImageSharp.fluid} style={{ width: "100%" }} />
  )
}

export default Logo
