export const normalizeMainMenu: any = (rawMenuData: any, source: any) => {
  if (source !== "wp") {
    return []
  }

  const mapItems: any = (items: any) => {
    return items.map((item: any) => {
      return {
        id: item.object_id,
        slug: item.slug,
        title: item.title,
        targetAtr: item.target,
        targetUrl: item.url,
        itemType: item.object,
        itemOrder: item.menu_order,
        children: item.child_items ? mapItems(item.child_items) : null,
        customCssClasses: item.classes,
        lastModifiedDate: item.post_modified,
      }
    })
  }

  const { slug } = rawMenuData.wordpressMenusMenusItems
  const menuItems = mapItems(rawMenuData.wordpressMenusMenusItems.items)

  return { menu: slug, items: menuItems }
}
