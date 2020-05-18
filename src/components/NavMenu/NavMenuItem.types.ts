export type NavMenuItemSubItemType = {
  title: string;
  icon?: JSX.Element;
  onClickEvent: Function;
};

export interface INavMenuItemProps {
  title: string;
  slug: string;
  items?: NavMenuItemSubItemType[];
  onClickEvent?: Function;
}
