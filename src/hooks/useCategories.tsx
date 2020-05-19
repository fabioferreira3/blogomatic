import { graphql, useStaticQuery } from "gatsby"
import { normalizeCategories } from "../normalizers/categories"

export const useCategories = () => {
  const rawCategoriesData = useStaticQuery(graphql`
    query {
      allWordpressCategory {
        nodes {
          name
          slug
          id
          count
          path
        }
      }
    }
  `)

  const categoriesData = normalizeCategories(
    rawCategoriesData.allWordpressCategory.nodes,
    "wp"
  )

  return categoriesData
}
