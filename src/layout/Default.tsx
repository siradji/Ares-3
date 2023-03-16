import { PropsWithChildren } from 'react';
import {Poppins} from '@next/font/google'
import classNames from "classnames";
import {DesktopHeader} from "@layout/components/Header";
import { Footer } from './components/Footer';


const font = Poppins({weight: ['100', '200', '300', '400', '500', '600', '700', '800']})

export function DefaultWrapper({
                                   children,
                               }: PropsWithChildren<any>): JSX.Element {
    return (
        <div className="flex flex-col min-h-screen">
            <DesktopHeader />
            <main className={classNames("site_main_wrapper flex-grow", font.className)}>{children}</main>
        </div>
    );
}
