import { graphql } from "gatsby"

export const wpMenuItems = graphql`
  fragment wpMenuItems on wordpress__menus_menus_itemsItems {
    attr_title
    classes
    description
    menu_order
    object_id
    object
    post_modified
    slug
    title
    target
    url
  }
`

// export const wpMenuChildItems = graphql`
//   fragment wpMenuChildItems on wordpress__menus_menus_itemsItemsChild_items {
//     attr_title
//     classes
//     description
//     menu_order
//     object_id
//     object
//     post_modified
//     title
//     target
//     url
//   }
// `
