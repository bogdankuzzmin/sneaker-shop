export interface IFooterListItem {
  name: string;
  url: string;
  isLinkExternal?: boolean;
  Icon?: string;
}

export interface IFooterListProps {
  list: IFooterListItem[];
  title: string;
}