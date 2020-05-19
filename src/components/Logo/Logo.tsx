import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const Logo: React.FC<any> = () => {
  const rawImageLogoData = useStaticQuery(graphql`
    query {
      wordpressWpLogo {
        url {
          localFile {
            childImageSharp {
              fixed(width: 500, height: 150, quality: 60) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  const logoImage = rawImageLogoData.wordpressWpLogo.url.localFile

  return <Img fixed={logoImage.childImageSharp.fixed} style={{ height: 90 }} />
}
