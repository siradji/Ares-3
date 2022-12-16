import {FiMenu} from 'react-icons/fi'


export function  HamburgerMenu (): JSX.Element {
    return (
        <button className='rounded-full p-3 shadow-3xl border-4 border-brand-orange-500 bg-brand-orange-500 flex items-center justify-center md:hidden'>
            <FiMenu className="text-white" size={28} />
        </button>
    )
}
