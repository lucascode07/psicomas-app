export interface HomeDataResponse {
  data: HomeData;
}

export interface HomeData {
  mainSectionCollection: MainSectionCollection;
}

export interface MainSectionCollection {
  items: MainSectionCollectionItem[];
}

export interface MainSectionCollectionItem {
  sectionInformation: SectionInformation;
  redirectLink: RedirectLink;
  image: Image;
}

export interface Image {
  imageFile: ImageFile;
  altAttribute: string;
}

export interface ImageFile {
  url: string;
  width: number;
  height: number;
}

export interface RedirectLink {
  text: string;
  link: string;
}

export interface SectionInformation {
  title: string;
  description: string;
}
