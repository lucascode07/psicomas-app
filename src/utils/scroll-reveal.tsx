'use client';

import { RevealList, RevealWrapper } from 'next-reveal';

interface Props {
    children: React.ReactNode;
    isList?: boolean;
    [props: string]: any
}

const ScrollReveal = ({ children, isList = false, ...props }: Props) => {

    return (
        isList
            ? (
                <RevealList interval={props.interval} delay={props.delay} {...props} >
                    {children}
                </RevealList >
            )
            : (
                <RevealWrapper className="load-hidden" {...props} viewFactor={0.7}>
                    {children}
                </RevealWrapper>
            )
    )

}

export default ScrollReveal