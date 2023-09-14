export namespace model {
  // APP CONTENT STATE TYPES
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

  // APP COMPONENT PROPS TYPES
  type DropCardProps = {
    state: Content;
    filters: Filter[];
    toggleFunc: Function;
    tagSelected?: boolean;
  };

  type CardProps = {
    state: Content;
  };

  type FilterCardProps = {
    state: Content;
    filters: Filter[];
    toggleFunc: Function;
    expandFunc: Function;
    collapseFunc: Function;
    clearFunc: Function;
  };

  type TagProps = {
    tag: Filter;
  };
}
