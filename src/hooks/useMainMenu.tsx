import { graphql, useStaticQuery } from "gatsby"
import { normalizeMainMenu } from "../normalizers/mainMenu"

export const useMainMenu = () => {
  const rawMainMenuData = useStaticQuery(graphql`
    query {
      wordpressSiteMetadata {
        url
      }
      wordpressMenusMenusItems(slug: { eq: "main-menu" }) {
        slug
        items {
          ...wpMenuItems
        }
      }
    }
  `)

  const siteUrl = rawMainMenuData.wordpressSiteMetadata.url
  const rawMenuItemsData = rawMainMenuData.wordpressMenusMenusItems

  return normalizeMainMenu(rawMenuItemsData, siteUrl, "wp")
}
