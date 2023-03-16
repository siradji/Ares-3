import NextImage from 'next/image'
import MastheadImage from '@assets/png/mastheadImage.png'
import {SearchBar} from "@components/SearchBar";
import {Container} from "@components/Container";
import {Slide} from 'react-awesome-reveal'
import { useEffect, useState } from 'react';
import { StoreDownloadButton } from './DownloadSection';

const randomText = [
    'Fast Food delivery',
    'Discover great food',
    'Feeling lazy?'
]
export function Masthead (): JSX.Element {
    // const [text, setText] = useState('Hungry')

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log(randomText[Math.floor(Math.random() * (randomText.length - 0 + 1) + 0)] )
    //       setText(randomText[Math.floor(Math.random() * randomText.length) + 1] )
    //     }, 2000)

    //     return  clearInterval(interval)
    // }, [])
    return (
        <section
            className="h-screen md:min-h-fit w-full bg-[url('/header.svg')]"
        >
            <Container className='pb-10 lg:pb-0'>
                <div className='flex flex-col-reverse lg:flex-row items-start justify-between  w-full'>
                    <div className='w-full lg:w-2/3 pt-20 lg:pt-28'>
                    <Slide>
                        <h1 className='text-white text-3xl md:text-6xl font-bold'>
                         Discover great food
                        </h1>
                        <h3 className="text-white text-lg mt-5">Order now and get it delivered  to your doorstep in minutes</h3>
                    </Slide>
                    <div className='flex space-y-5 md:space-y-0 flex-col md:flex-row mt-40 md:mt-7 '>
                        <StoreDownloadButton store='APPLE' classname='md:mr-12'/>
                        <StoreDownloadButton store='GOOGLE'/>
                    </div>
                    </div>

                    <div className='pt-28 hidden md:block md:pt-16'>
                        <NextImage src={MastheadImage} alt='Eatlater Image' className='w-[200px] md:w-[450px] h-[303px] md:h-[622px]'/>
                    </div>
                </div>
            </Container>

        </section>
    )
}
