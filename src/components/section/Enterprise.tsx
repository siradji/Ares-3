import {Container} from "@components/Container";
import eatlater from '@assets/svg/enterprise-2.svg'
import Image from 'next/image'
import { GenericButtonLink } from "@components/buttons/GenericButton";

export function EatLaterEnterprise (): JSX.Element {
    return  (
        <section id='#enterprise' className='my-20 bg-brand-gray-500'>
            <Container>
                <div className="flex flex-col-reverse md:flex-row w-full md:items-center md:justify-between py-10">
                    <div className="flex flex-col mt-10 md:mt-0 w-full md:w-1/2 md:space-y-10">
                       <div className="flex flex-col space-y-5">
                            <h1 className="font-bold text-xl md:text-5xl text-black">EatLater Enterprise</h1>
                            <h2 className="font-medium text-lg md:text-2xl text-black">Enroll your employees on Eatlater</h2>
                       </div>
                       <p className="font-medium text-lg md:text-xl ">
                       Eatlater enterprise allows institutions to enroll employees on a monthly basis. Each employee has an allocated credit which can be used to order lunch and get it delivered to the office. We understand the predicament of employees going out for lunch. It decreases productivity and EatLater is here to solve that. 
                       </p>
                       <GenericButtonLink
                        linkTo="/enterprise"
                        label="Learn more"
                        style="w-40 justify-self-end mt-10 md:mt-0"
                       />
                    </div>
                    <div className="flex w-full md:w-1/2 md:ustify-end">
                    <Image 
                        src={eatlater}
                        alt="eatlater enterprise"
                        width={500}
                        height={500}
                    />
                    </div>
                </div>
            </Container>
        </section>
    )
}
