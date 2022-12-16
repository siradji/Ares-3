import NextImage from 'next/image';
import { Container } from '@components/Container';
import EatLaterWhite from '@assets/png/sitelogo.png';
import { PropsWithChildren } from 'react';

import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import {StoreDownloadButton} from "@components/section/DownloadSection";



export function Footer(): JSX.Element {
    return (
        <footer data-testid="Site.Footer" className="bg-brand-black-500">
            <Container className="py-20 hidden md:block">
                <div className="flex flex-row justify-between flex-wrap">
                    <div className="flex flex-col w-1/3">
                        <NextImage
                            src={EatLaterWhite}
                            width={150}
                            height={50}
                            alt="eatlater logo"
                        />
                        <div className="text-white font-medium text-lg mt-7 ">
                            At EatLater our job is to make sure you get the best food and fast
                            delivery service.
                        </div>
                        <div className="text-white mt-20 text-body-sm">
                            copyright @ 2022 EatLater - All Right Reserved
                        </div>
                    </div>
                    <FooterLinks>
                        <h2 className="text-lg text-white font-bold mb-8">
                            Contact Us
                        </h2>
                        <ul>
                            <li className="text-lg text-white mb-8">Get Help</li>
                            <li className="flex">
                                <div className="bg-brand-black-500 rounded p-2">
                                    <FiTwitter color="#ffffff" size={16} />
                                </div>
                                <div className="mx-6 bg-brand-black-500 rounded p-2">
                                    <FiFacebook color="#ffffff" size={16} />
                                </div>
                                <div className="bg-brand-black-500 rounded p-2">
                                    <FiInstagram color="#ffffff" size={16} />
                                </div>
                            </li>
                        </ul>
                    </FooterLinks>
                    <FooterLinks>
                        <h2 className="text-lg text-white font-bold mb-8">Explore</h2>
                        <ul>
                            <li className="text-lg text-white mb-4">FAQs</li>
                            <li className="text-lg text-white mb-4">Careers</li>
                            <li className="text-lg text-white mb-4">Privacy Policy</li>
                            <li className="text-lg text-white mb-4">Terms of Use</li>
                        </ul>
                    </FooterLinks>
                    <div className="flex flex-col">
                        <div className='mb-7'>
                            <StoreDownloadButton classname='bg-brand-green-500' onClick={() => null} store='APPLE' testId='AppStore.Download.Footer' />
                        </div>
                        <div className="mx-6" />
                        <StoreDownloadButton classname='bg-brand-green-500' onClick={() => null} store='GOOGLE' testId='PlayStore.Download.Footer' />
                    </div>
                </div>
            </Container>
            <Container className="py-10 block md:hidden" >
                <div className="flex flex-row w-full justify-between">
                    <div className="w-1/2">
                        <div className="flex flex-col">
                            <NextImage
                                src={EatLaterWhite}
                                width={150}
                                height={50}
                                alt="eatlater logo"
                            />
                            <div className="text-white font-semibold text-sm lg:text-lg mt-7 ">
                                At EatLater our job is to make sure you get the best food and
                                fast delivery service.
                            </div>
                        </div>

                        <FooterLinks>
                            <h2 className="text-md text-white font-bold mb-3 mt-8">
                                Explore
                            </h2>
                            <ul>
                                <li className="text-sm text-white mb-2">FAQs</li>
                                <li className="text-sm text-white mb-2">Careers</li>
                                <li className="text-sm text-white mb-2">Privacy Policy</li>
                                <li className="text-sm text-white mb-2">Terms of Use</li>
                            </ul>
                        </FooterLinks>
                        <div className="text-white mt-6 text-sxs">
                            copyright @ 2022 EatLater - All Right Reserved
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex flex-col items-end">
                            <FooterLinks>
                                <h2 className="text-md text-white font-bold mb-4">
                                    Contact Us
                                </h2>
                                <ul>
                                    <li className="text-sm text-white mb-4">Get Help</li>
                                    <li className="flex">
                                        <div className="bg-brand-black-500 rounded p-2">
                                            <FiTwitter color="#ffffff" size={16} />
                                        </div>
                                        <div className="mx-6 bg-brand-black-500 rounded p-2">
                                            <FiFacebook color="#ffffff" size={16} />
                                        </div>
                                        <div className="bg-brand-black-500 rounded p-2">
                                            <FiInstagram color="#ffffff" size={16} />
                                        </div>
                                    </li>
                                </ul>
                            </FooterLinks>
                            <div className='mt-16 flex flex-col'>
                                <StoreDownloadButton classname='bg-brand-green-500' onClick={() => null} store='APPLE' testId='AppStore.Download.Footer' />
                                <StoreDownloadButton classname='bg-brand-green-500 mt-10' onClick={() => null} store='GOOGLE' testId='PlayStore.Download.Footer' />
                            </div>
                        </div>
                        </div>
                    </div>
            </Container>
        </footer>
    );
}



interface FooterLinksProps {
    label?: string;
}

export function FooterLinks(
    props: PropsWithChildren<FooterLinksProps>
): JSX.Element {
    return <div className="flex flex-col w-1/3'">{props.children}</div>;
}
