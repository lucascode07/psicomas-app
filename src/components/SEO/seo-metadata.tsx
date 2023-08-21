import { getDefaultSeoData } from "@/services/contentful-queries";

const SeoMetadata = async () => {

    const DOMAIN_URL = process.env.DOMAIN_URL;

    const {
        title,
        description,
        noIndex,
        canonicalUrl,
        author,
        image
    } = await getDefaultSeoData();

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image.imageFile.url} />

            {
                canonicalUrl &&
                <link
                    rel="canonical"
                    href={`${DOMAIN_URL}${canonicalUrl}`}
                    data-baseprotocol="https:"
                    data-basehost={DOMAIN_URL} />
            }
            {
                noIndex && <meta name="robots" content="noindex" />
            }

            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={image.imageFile.url} />
            <meta property='og:image:width' content='400' />
            <meta property='og:image:height' content='300' />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={`${DOMAIN_URL}${canonicalUrl ?? ''}`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:url" content={`${DOMAIN_URL}${canonicalUrl ?? ''}`} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image.imageFile.url} />
            <meta name="twitter:creator" content={author} />
        </>
    )
}

export default SeoMetadata