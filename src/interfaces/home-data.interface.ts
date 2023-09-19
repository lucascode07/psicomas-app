export interface HomeDataResponse {
  data: HomeData;
}

export interface HomeData {
  mainSectionCollection: MainSectionCollection;
  servicesSectionCollection: ServicesSectionCollection;
  professionalsSectionCollection: ProfessionalsSectionCollection;
  attentionSectionCollection: AttentionSectionCollection;
  stepsSectionCollection: StepsSectionCollection;
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
  htmlId?: string;
}

export interface ServicesSectionCollection {
  items: ServicesSectionCollectionItem[];
}

export interface ServicesSectionCollectionItem {
  sectionInformation: SectionInformation;
  cardsCollection: CardsCollection;
}

export interface CardsCollection {
  items: CardsCollectionItem[];
}

export interface CardsCollectionItem {
  title: string;
  description: string;
  iconClass: string;
}

export interface ProfessionalsSectionCollection {
  items: ProfessionalsSectionCollectionItem[];
}

export interface ProfessionalsSectionCollectionItem {
  sectionInformation: SectionInformation;
  redirectLink: RedirectLink;
}

export interface AttentionSectionCollection {
  items: AttentionSectionCollectionItem[];
}

export interface AttentionSectionCollectionItem {
  sectionInformation: SectionInformation;
  image: Image;
  specialitiesCollection: SpecialitiesCollection;
}
export interface SpecialitiesCollection {
  items: SpecialitiesCollectionItem[];
}

export interface SpecialitiesCollectionItem {
  text: any;
  image: Image;
}

export interface StepsSectionCollection {
  items: StepsSectionCollectionItem[];
}

export interface StepsSectionCollectionItem {
  sectionInformation: SectionInformation;
  cardsCollection: CardsCollection;
}
