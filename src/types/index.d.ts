export namespace model {
  type Section = {
    title: string;
    id: string;
    contents: Content[];
  };

  type Content = {
    title: string;
    subtitle?: string;
    content: string[];
    contentType: "card" | "dropcard" | "dropcard-resume" | "filter-card";
    active: boolean;
    tags?: Filter[];
    url?: string;
    codeUrl?: string;
    urlText?: string;
    locked?: boolean;
    tagSelected?: boolean;
  };

  type Filter = {
    name: string;
    active: boolean;
  };

  type DropCardProps = {
    title: string;
    subtitle?: string;
    content: string[];
    tags?: Filter[];
    active?: boolean;
    url?: string;
    codeUrl?: string;
    urlText?: string;
    locked?: boolean;
    state: Content;
    filters: Filter[];
    toggleFunc: Function;
    tagSelected?: boolean;
  };

  type CardProps = {
    title: string;
    content: string[];
  };

  type FilterCardProps = {
    title: string;
    content: string[];
    filters: Filter[];
    toggleFunc: Function;
    expandFunc: Function;
    collapseFunc: Function;
    clearFunc: Function;
  };

  type TagProps = {
    tag: string;
  };
}
