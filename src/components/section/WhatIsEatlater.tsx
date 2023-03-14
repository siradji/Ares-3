import Image from 'next/image'
import SectionImage from '@assets/svg/eatlater-2.svg'
import { Slide } from 'react-awesome-reveal'
import { Container } from '@components/Container'


export function WhatIsEatLater (): JSX.Element {
    return (
            <section className="mt-10 md:mt-36 bg-brand-gray-500 ">
                <Container>
                    <div className='flex flex-col md:flex-row  md:items-start md:justify-between  w-full py-10 md:py-20'>
                    <div className='w-full md:w-1/2'>
                    <div className='hidden md:flex flex-col items-center'>
                        <Slide>
                            <h2 className='text-lg md:text-2xl font-bold text-black'>What is EatLater?</h2>
                            <h2 className='font-bold text-xl md:text-4xl mt-10 w-[420px] text-center'>
                            Fast and reliable food delivery
                            </h2>
                        </Slide>
                    </div>
                    <div className='flex md:hidden flex-col w-full items-center'>
                            <h2 className='text-lg md:text-2xl font-bold text-black'>What is EatLater?</h2>
                            <h2 className='font-bold text-xl md:text-4xl text-center mt-5'>
                            Fast and reliable food delivery
                            </h2>
                    </div>
                    <div className='mt-20 w-full]'>
                       <Slide>
                        <p className='font-medium text-lg md:text-2xl text-black text-center'>
                            EatLater is a food discovery platform that enables you to order food online and get it delivered, quickly, and affordable whilst taking your schedule into consideration.
                            </p>
                       </Slide>
                    </div>
                </div>
                <div className='w-full md:w-1/2 md:flex md:justify-end'>
                    <Image
                        src={SectionImage}
                        alt="what is eatlater"
                        className='w-[500px] h-[500px]'
                    />
                </div>
                    </div>
                </Container>
            </section>
    )
}