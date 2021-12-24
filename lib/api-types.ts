export interface ApiNode<T> {
  node: T;
}

export interface ApiEdges<T> {
  edges: T[];
}

export interface ApiEdgesNodes<T> extends ApiEdges<ApiNode<T>> {}

export interface ApiGeneralSettings {
  description: string;
  title: string;
  url: string;
}

export interface ApiPreviewPost {
  databaseId: number;
  slug: string;
  status: string;
}

export interface ApiImage {
  sourceUrl: string;
  caption: string;
}

export interface ApiAvatar {
  url: string;
}

export interface ApiAuthor {
  name: string;
  firstName: string;
  lastName: string;
  avatar: ApiAvatar;
}

export interface ApiPostSummary {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: ApiNode<ApiImage>;
  author: ApiNode<ApiAuthor>;
}

export interface ApiPost extends ApiPostSummary {
  categories: ApiEdgesNodes<ApiCategory>;
  tags: ApiEdgesNodes<ApiTag>;
}

export interface ApiPostDetails extends ApiPost {
  content: string;
}

export interface ApiCategory {
  name: string;
}

export interface ApiTag {
  name: string;
}
