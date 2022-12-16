export function PromotionalSection (): JSX.Element {
    return (
        <div className='bg-[#F8F9F8] flex flex-col w-full  my-10 pt-10 lg:pt-32  text-brand-black-500'>
            <div className='flex flex-col lg:flex-row w-full px-5 lg:px-20'>
                <div className='flex justify-between mb-16 lg:mb-0 w-full md:w-2/3 lg:w-1/2 '>
                    <h1 className='font-bold text-2xl md:text-4xl lg:text-6xl '>
                        No more worries!<span className='text-brand-green-500'>EatLater</span> has your back
                    </h1>
                </div>
                <div className='space-y-4 text-xl font-medium lg:ml-10 self-end '>
                    <p className='font-bold text-4xl'>Are you</p>
                    <p>Expecting guest but don’t have time to cook?</p>
                    <p>A university student and want your meal delivered when you get home?</p>
                    <p>An office worker who wants to order lunch without leaving the office? </p>
                </div>
            </div>

            <div className='flex flex-row items-center w-full md:w-2/3 lg:w-5/12  mt-32 '>
                <div className='bg-brand-green-500 text-white w-3/4 py-2 text-center text-sm md:text-lg'>
                   Get 20% off your first order with this code
                </div>
                <div className='rounded-tr-[20px] rounded-br-[20px] bg-brand-black-500 text-sm md:text-xl font-bold text-white w-1/4 text-center py-2'>
                    ETLJKCE
                </div>
            </div>
        </div>
    )
}
