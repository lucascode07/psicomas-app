import apolloClient from "@/context/apollo/apollo-client";
import { DefaultSeoDataResponse } from "@/interfaces/seo_data.interface";
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
