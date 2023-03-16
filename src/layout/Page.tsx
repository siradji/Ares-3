import { PropsWithChildren } from "react";
import { EatLaterHead } from "./components/Head";
import { Container } from "@components/Container";
import { Footer } from "./components/Footer";

export interface PageLayoutProps {
    title: string
    keywords: string
    description: string
}
export function PageLayout (props: PropsWithChildren<PageLayoutProps>): JSX.Element {
    const {children, ...rest} = props
    return (
        <div>
            <EatLaterHead
            {...rest}
            />
             <section className="bg-primary-500 py-20 ">
                   <Container>
                    <div className="flex flex-col">
                    <h1 className="text-5xl mb-4 text-white font-bold">{props.title}</h1>
                    <h3 className="font-medium text-xl text-white">{props.description}</h3>
                    </div>
                   </Container>
                </section>
            <Container>
               <section>
                    {children}
               </section>
            </Container>
            <Footer />
        </div>
    )
}