export interface HeaderDataResponse {
  data: Data;
}

export interface Data {
  headerSectionCollection: HeaderSectionCollection;
}

export interface HeaderSectionCollection {
  items: HeaderItem[];
}

export interface HeaderItem {
  redirectLink: RedirectLink;
  navigationLinksCollection: NavigationLinksCollection;
  logo: Logo;
}

export interface Logo {
  imageFile: ImageFile;
  altAttribute: string;
}

export interface ImageFile {
  url: string;
  width: number;
  height: number;
}

export interface NavigationLinksCollection {
  items: RedirectLink[];
}

export interface RedirectLink {
  text: string;
  link: string;
}
