import apolloClient from "@/context/apollo/apollo-client";
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
