import { graphql } from "gatsby"

export const fluidHdImage = graphql`
  fragment fluidHdImage on File {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 60) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const fluidImageS2 = graphql`
  fragment fluidImageS2 on File {
    childImageSharp {
      fluid(maxWidth: 1600, quality: 60) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const fluidImageS3 = graphql`
  fragment fluidImageS3 on File {
    childImageSharp {
      fluid(maxWidth: 1366, quality: 60) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const fluidImageS4 = graphql`
  fragment fluidImageS4 on File {
    childImageSharp {
      fluid(maxWidth: 1024, quality: 60) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const fluidImageS5 = graphql`
  fragment fluidImageS5 on File {
    childImageSharp {
      fluid(maxWidth: 768, quality: 60) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const fluidImageS6 = graphql`
  fragment fluidImageS6 on File {
    childImageSharp {
      fluid(maxWidth: 640, quality: 60) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
