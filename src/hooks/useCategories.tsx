import { graphql, useStaticQuery } from "gatsby"
import { normalizeCategories } from "../normalizers/categories"

const useCategories = () => {
  const rawCategoriesData = useStaticQuery(graphql`
    query {
      allWordpressCategory(filter: { count: { gt: 0 } }) {
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

export default useCategories
