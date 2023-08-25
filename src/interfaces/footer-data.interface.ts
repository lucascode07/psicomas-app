export interface FooterDataResponse {
  data: FooterData;
}

export interface FooterData {
  contactSectionCollection: ContactSectionCollection;
  footerSectionCollection: FooterSectionCollection;
}

export interface ContactSectionCollection {
  items: ContactSectionCollectionItem[];
}

export interface ContactSectionCollectionItem {
  sectionInformation: SectionInformation;
}

export interface SectionInformation {
  title: string;
  description: string;
  htmlId: string;
}

export interface FooterSectionCollection {
  items: FooterSectionCollectionItem[];
}

export interface FooterSectionCollectionItem {
  slogan: string;
  contactInformation: string[];
  linksCollection: LinksCollection;
  logoAlternativo: LogoAlternativo;
}

export interface LinksCollection {
  items: LinksCollectionItem[];
}

export interface LinksCollectionItem {
  text: string;
  link: string;
}

export interface LogoAlternativo {
  altAttribute: string;
  imageFile: ImageFile;
}

export interface ImageFile {
  url: string;
  width: number;
  height: number;
}
