export const normalizeMainMenu: any = (
  rawMenuData: any,
  siteUrl: string,
  source: any
) => {
  if (source !== "wp") {
    return []
  }

  const defineUrl = (item: any, siteUrl: string) => {
    if (item.object === "category" || item.object === "post") {
      return item.url.replace(siteUrl, "")
    }
    return item.url
  }

  const mapItems: any = (items: any) => {
    return items.map((item: any) => {
      return {
        id: item.object_id,
        slug: item.slug,
        title: item.title,
        targetAtr: item.target,
        targetUrl: defineUrl(item, siteUrl),
        itemType: item.object,
        itemOrder: item.menu_order,
        customCssClasses: item.classes,
        lastModifiedDate: item.post_modified,
        isInternal: item.object !== "custom",
      }
    })
  }

  const { slug } = rawMenuData
  const menuItems = mapItems(rawMenuData.items)

  return { menu: slug, items: menuItems }
}
