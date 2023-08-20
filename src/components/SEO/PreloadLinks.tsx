const PreloadLinks = () => {
    return (
        <>
            <link
                rel="preload"
                href="/fonts/SofiaPro/Sofia-Pro-Regular.otf"
                as="font"
                type="font/otf"
                crossOrigin="anonymous" />
            <link
                rel="preload"
                href="/fonts/SofiaPro/Sofia-Pro-Medium.otf"
                as="font"
                type="font/otf"
                crossOrigin="anonymous" />
            <link
                rel="preload"
                href="/fonts/SofiaPro/Sofia-Pro-SemiBold.otf"
                as="font"
                type="font/otf"
                crossOrigin="anonymous" />
            <link
                rel="preload"
                href="/fonts/SofiaPro/Sofia-Pro-Bold.otf"
                as="font"
                type="font/otf"
                crossOrigin="anonymous" />
        </>
    )
}

export default PreloadLinks