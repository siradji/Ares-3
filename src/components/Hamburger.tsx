import {FiMenu} from 'react-icons/fi'


export function  HamburgerMenu (): JSX.Element {
    return (
        <button className='rounded-sm p-3 bg-transparent flex items-center justify-center md:hidden'>
            <FiMenu className="text-white" size={28} />
        </button>
    )
}
