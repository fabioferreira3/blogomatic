export type NavMenuItemSubItemType = {
  title: string
  icon?: JSX.Element
  onClickEvent: Function
}

export interface INavMenuItemProps {
  title: string
  id: string | number
  targetUrl?: string
  isInternal: boolean
  items?: NavMenuItemSubItemType[]
  onClickEvent?: Function
}
