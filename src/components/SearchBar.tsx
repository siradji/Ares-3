import { useEffect, useRef } from "react"

export function SearchBar (): JSX.Element {
    const ref = useRef<HTMLInputElement>(null)
    useEffect(() => {
        ref.current?.focus()
    }, [])
    return (
        <div className='w-[320px] md:w-[600px] flex items-center mt-16  md:mt-20'>
                <input ref={ref} className='bg-white text-xs font-medium md:text-lg  rounded-sm  outline-none w-full md:w-2/3 px-5 placeholder:text-gray-300 py-3 md:py-5'  placeholder='Delivery Address'/>
        </div>
    )
}
