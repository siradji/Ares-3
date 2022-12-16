import { PropsWithChildren } from 'react';
import Head from 'next/head';

const title = 'Food Delivery at your convenience | Order food online and get it delivered at your liking';
const description =
    'EatLater is a food delivery company that enables consumers in Africa to order food from their favourite  vendors and restaurants. Our main mission is to give people the flexibility to order food anywhere and get it delivered at the time of their choice.  We understand the predicaments of food delivery and lack of flexibility in Africa and we strongly believe ordering food should be easy and flexible.'

const siteName = 'EatLater'
import {Gothic_A1} from '@next/font/google'
import classNames from "classnames";
import {DesktopHeader} from "@layout/components/Header";


const font = Gothic_A1({subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800']})

export function DefaultWrapper({
                                   children,
                               }: PropsWithChildren<any>): JSX.Element {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <meta charSet="UTF-8" />
                <title key="title">{title}</title>
                <meta key="description" name="description" content={description} />
                <meta key="robots" name="robots" content="follow,index" />
                <meta
                    key="viewport"
                    name="viewport"
                    content="user-scalable=no, width=device-width, initial-scale=1"
                />
                <meta
                    key="apple-mobile-web-app-capable"
                    name="apple-mobile-web-app-capable"
                    content="yes"
                />

                <meta key="og:locale" name="og:locale" content="en_US" />
                <meta key="og:title" name="og:title" content={title} />
                <meta key="og:site_name" name="og:site_name" content={siteName} />
                <meta
                    key="og:description"
                    name="og:description"
                    content={description}
                />

                <link rel="icon" type="image/png" sizes="70x70" href="/favicon.png" />
            </Head>
            <div>
                <DesktopHeader />
            </div>
            <main className={classNames("site_main_wrapper flex-grow", font.className)}>{children}</main>
        </div>
    );
}
