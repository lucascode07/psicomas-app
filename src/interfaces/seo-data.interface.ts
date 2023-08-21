export interface DefaultSeoDataResponse {
  data: DefaultSeoData;
}

export interface DefaultSeoData {
  seoDataCollection: SEODataCollection;
}

export interface SEODataCollection {
  items: SeoData[];
}

export interface SeoData {
  lang: string;
  title: string;
  description: string;
  noIndex: boolean;
  canonicalUrl: null;
  author: string;
  image: SeoImage;
}

export interface SeoImage {
  imageFile: ImageFile;
}

export interface ImageFile {
  url: string;
}
