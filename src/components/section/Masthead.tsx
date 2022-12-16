import NextImage from 'next/image'
import MastheadImage from '@assets/png/mastheadImage.png'
import {SearchBar} from "@components/SearchBar";
import {Container} from "@components/Container";
export function Masthead (): JSX.Element {
    return (
        <section
            className="min-h-fit w-full bg-[url('/header-hero.png')]"
        >
            <Container className='pb-10 lg:pb-0'>
                <div className='flex flex-col-reverse lg:flex-row items-center justify-between  w-full '>
                    <div className='w-full lg:w-2/3 pt-5 lg:pt-16'>
                        <h1 className='text-white text-3xl md:text-6xl font-bold'>Food Delivery at your convenience</h1>
                        <h3 className="text-white text-lg md:text-xl font-lighter mt-5">Order ahead of time and Get your food delivered when you want</h3>
                        <SearchBar />
                    </div>

                    <div className='pt-28 md:pt-16'>
                        <NextImage src={MastheadImage} alt='Eatlater Image' className='w-[200px] md:w-[450px] h-[303px] md:h-[622px]'/>
                    </div>
                </div>
            </Container>

        </section>
    )
}
