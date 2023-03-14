import Image from "next/image";
import PhoneImageTop from '@assets/png/Phonetop.png'
import PhoneImageBottom from '@assets/png/Phonebottom.png'
import classNames from "classnames";
import apple from '@assets/svg/apple.svg'
import play from '@assets/svg/play.svg'
import { Slide } from "react-awesome-reveal";
import { Container } from "@components/Container";

export function DownloadSection (): JSX.Element {
    return (
        <section id="#DownloadSection" >
            <div className='bg-white relative py-40 mt-10 hidden lg:flex'>
                <Container>
                    <div className="flex flex-row items-center justify-between w-full">
                    <div className='flex flex-col pb-48 pt-28 '>
                    <div className=''>
                        <Slide>
                            <h1 className='text-5xl text-primary-500 font-bold'>
                                Download + Tap + Eat
                            </h1>
                        </Slide>
                       <Slide>
                        <p className='text-2xl font-bold w-[400px] xl:w-[500px]  mt-11 text-black '>
                            It is as easy as that! Download the mobile app and choose from hundreds of restaurants in your area
                            </p>
                       </Slide>
                    </div>
                    <div className='flex flex-row mt-7 '>
                        <StoreDownloadButton store='APPLE' classname='mr-12'/>
                        <StoreDownloadButton store='GOOGLE'/>
                    </div>
                </div>
                <div className='flex flex-row items-center w-1/2'>
                    <Image src={PhoneImageTop} alt="Eatlater app" className='w-[250px] h-[541px] lg:absolute top-0 right-[50px] xl:right-[371px] xl:mr-5' />
                    <Image src={PhoneImageBottom} alt="Eatlater app" className='hidden xl:block w-[250px] h-[541px] absolute bottom-0 right-[120px]' />
                </div>
                    </div>
                </Container>
            </div>
            <DownloadSectionMobile />
        </section>
    )
}

export function DownloadSectionMobile (): JSX.Element {
    return (
        <div className='bg-white py-20'>
            <div  className='bg-white flex flex-col-reverse lg:hidden py-32'>
                <div className='flex flex-col items-center w-full mt-16'>
                    <div className='flex flex-col'>
                            <h1 className='text-5xl text-center text-primary-500 font-bold'>
                                Download + Tap + Eat
                            </h1>
                        <p className='text-xl  text-center font-bold w-full mt-11 text-black '>
                            It is as easy as that! Download the mobile app and choose from hundreds of restaurants in your area
                            </p>
                    </div>
                    <div className='flex flex-col md:flex-row mt-7 '>
                        <StoreDownloadButton store='APPLE' classname='mr-5 mb-5 md:mb-0'/>
                        <StoreDownloadButton store='GOOGLE'/>
                    </div>
                </div>
                <div className='flex flex-row justify-center'>
                    <Image src={PhoneImageTop} alt="Eatlater app" className='w-[250px] h-[541px]' />
                </div>
            </div>
        </div>
    )
}

type storeType = 'APPLE' | 'GOOGLE'

interface StoreDownloadButtonProps {
    onClick?: () => void
    testId?: string
    store: storeType
    classname?: string
}

/**
 * @param props StoreDownloadButtonProps
 * @constructor
 */
export function StoreDownloadButton (props: StoreDownloadButtonProps):JSX.Element {
    return (
        <button className={classNames('bg-brand-black-500 h-[65px] w-[200px] rounded-xl shadow-lg', props.classname)}  onClick={props.onClick}>
            <div className={classNames('w-full flex h-full items-center p-2')}>
                <Image alt="apple-logo" src={props.store === 'APPLE' ? apple : play} width={30} height={30} />
                <div className="ml-4">
                    <p className="text-white text-xs">
                        Coming soon on the
                    </p>
                    <p className="text-white text-md">
                        {`${props.store === 'APPLE' ? 'App' : 'Play'} Store`}
                    </p>
                </div>
            </div>
        </button>
    )
}
