import apolloClient from "@/context/apollo/apollo-client";
import { FooterDataResponse } from "@/interfaces/footer-data.interface";
import { HeaderDataResponse } from "@/interfaces/header-data.interface";
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