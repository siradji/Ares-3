export function SearchBar (): JSX.Element {
    return (
        <div className='w-[320px] md:w-[600px] flex items-center mt-16  md:mt-20'>
                <input className='bg-white text-xs rounded-tl-[20px] rounded-bl-[20px]  outline-none w-2/3 px-5 placeholder:text-gray-300 py-3 md:py-5'  placeholder='What is your address'/>
            <button className='flex text-xs outline-0 items-center justify-center w-1/3 py-3 md:py-5 bg-brand-orange-500 text-white rounded-tr-[20px] rounded-br-[20px]'>
                 current address
            </button>
        </div>
    )
}
