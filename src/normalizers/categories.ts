export const normalizeCategory: any = (rawCategoryData: any, source: any) => {
  if (source !== "wp") {
    return null
  }
  return {
    ...rawCategoryData,
    postsCount: rawCategoryData.count,
  }
}

export const normalizeCategories: any = (
  rawCategoriesData: any,
  source: any
) => {
  if (source !== "wp") {
    return []
  }
  return rawCategoriesData.map((rawCategoryData: any) =>
    normalizeCategory(rawCategoryData, source)
  )
}
