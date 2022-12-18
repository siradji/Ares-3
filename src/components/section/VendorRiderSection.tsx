import Image from "next/image";
import RiderImage from '@assets/png/rider.png'
import VendorImage from "@assets/svg/vendor.svg"

export function VendorRiderSection (): JSX.Element {
    return (
        <section id='#vendorsRiders' className='my-20'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='bg-[#798293] flex flex-col items-center w-full  md:w-1/2 px-10 md:px-28 lg:px-40  py-10 md:py-20 lg:py-28'>
                    <Image src={VendorImage} alt='EatLater Rider' className='w-[156px] lg:w-[300px] h-[128px] lg:h-[250px]'/>
                    <div className='text-white mt-10'>
                        <h1 className='text-3xl text-center font-bold mb-3'>Become a vendor</h1>
                        <p className='font-light text-lg leading-7'>Drive sales by reaching out to wider audience. Sell on EatLater and boost your sales, grow your business and more </p>
                        <button className='bg-brand-black-500 rounded-lg py-2 px-3 mt-4 text-center'>Download the vendors app</button>
                    </div>
                </div>
                <div className='bg-[#798293] flex flex-col items-center w-full mt-1 md:mt-0  md:w-1/2 md:px-28 lg:px-40 md:ml-1 p-10 md:py-20 lg:py-28'>
                    <Image src={RiderImage} alt='EatLater Rider' className='w-[156px] lg:w-[300px] h-[128px] lg:h-[250px]'/>
                    <div className='text-white mt-10'>
                        <h1 className='text-3xl text-center font-bold mb-3'>Become a Rider</h1>
                        <p className='font-light text-lg leading-7'>Drive sales by reaching out to wider audience. Sell on EatLater and boost your sales, grow your business and more </p>
                        <button className='bg-brand-black-500 rounded-lg py-2 px-3 mt-4 text-center'>Download the riders app</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
