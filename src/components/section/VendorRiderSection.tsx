import Image from "next/image";
import VendorImage from "@assets/svg/vendor.svg"
import { Container } from "@components/Container";
import { GenericButtonLink } from "@components/buttons/GenericButton";

export function VendorRiderSection (): JSX.Element {
    return (
        <section id='#vendorsRiders' className="mt-10 md:mt-40">
            <div className="flex flex-row mb-20 justify-center items-center w-full">
                    <h1 className="font-bold text-black text-4xl">Beyond food</h1>
                </div>
          <div  className=' bg-brand-gray-500 py-10'>
          <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="w-full mb-10 md:mb-0 md:w-1/2">
                        <Image
                            src={VendorImage}
                            alt='eatlater vendor'
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 ">
                        <h1 className="font-bold text-2xl mb-10 text-black">Become a vendor</h1>
                        <p className="font-medium text-black text-lg w-full md:w-[580px]">
                        Drive sales by reaching out to wider audience
                        Sell on EatLater and boost your sales, grow your business and more 
                        </p>
                        <GenericButtonLink 
                            linkTo="/vendors"
                            label="Learn more"
                            style="w-40 justify-self-end mt-20"
                        />
                    </div>
                </div>
           </Container>
          </div>
        </section>
    )
}
