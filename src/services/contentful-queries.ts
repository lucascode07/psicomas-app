import apolloClient from "@/context/apollo/apollo-client";
import { FooterDataResponse } from "@/interfaces/footer-data.interface";
import { HeaderDataResponse } from "@/interfaces/header-data.interface";
import { HomeDataResponse } from "@/interfaces/home-data.interface";
import { DefaultSeoDataResponse } from "@/interfaces/seo-data.interface";
import { gql } from "@apollo/client";

export async function getDefaultSeoData() {
  const { data }: DefaultSeoDataResponse = await apolloClient.query({
    query: gql`
      query DEFAULT_SEO_DATA {
        seoDataCollection(where: { code: "psicomas_seo-home" }) {
          items {
            lang
            title
            description
            image {
              imageFile {
                url
              }
            }
            noIndex
            canonicalUrl
            author
          }
        }
      }
    `,
  });

  return data.seoDataCollection.items[0];
}

export async function getHeaderData() {
  const { data }: HeaderDataResponse = await apolloClient.query({
    query: gql`
      query HEADER_SECTION_CONTENT {
        headerSectionCollection {
          items {
            logo {
              imageFile {
                url
                width
                height
              }
              altAttribute
            }
            navigationLinksCollection {
              items {
                text
                link
              }
            }
            redirectLink {
              text
              link
            }
          }
        }
      }
    `,
  });

  return data.headerSectionCollection.items[0];
}

export async function getHomePageData() {
  const { data }: HomeDataResponse = await apolloClient.query({
    query: gql`
      query HOME_CONTENT {
        mainSectionCollection {
          items {
            sectionInformation {
              title
              description
            }
            redirectLink {
              text
              link
            }
            image {
              imageFile {
                url
                width
                height
              }
              altAttribute
            }
          }
        }
        servicesSectionCollection {
          items {
            sectionInformation {
              title
              description
              htmlId
            }
            cardsCollection {
              items {
                title
                description
                iconClass
              }
            }
          }
        }
        professionalsSectionCollection {
          items {
            sectionInformation {
              title
              description
              htmlId
            }
            redirectLink {
              text
              link
            }
          }
        }
        attentionSectionCollection {
          items {
            sectionInformation {
              title
              description
              htmlId
            }
            image {
              imageFile {
                url
                width
                height
              }
              altAttribute
            }
            specialitiesCollection {
              items {
                text {
                  json
                }
                image {
                  altAttribute
                  imageFile {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    mainSection: data.mainSectionCollection.items[0],
    servicesSection: data.servicesSectionCollection.items[0],
    professionalsSection: data.professionalsSectionCollection.items[0],
    attentionSection: data.attentionSectionCollection.items[0],
  };
}

export async function getFooterData() {
  const { data }: FooterDataResponse = await apolloClient.query({
    query: gql`
      query FOOTER_SECTION_CONTENT {
        contactSectionCollection {
          items {
            sectionInformation {
              title
              description
              htmlId
            }
          }
        }
        footerSectionCollection {
          items {
            logoAlternativo {
              imageFile {
                url
                width
                height
              }
              altAttribute
            }
            slogan
            linksCollection {
              items {
                text
                link
              }
            }
            contactInformation
          }
        }
      }
    `,
  });

  return {
    contactContent: data.contactSectionCollection.items[0],
    footerContent: data.footerSectionCollection.items[0],
  };
}
