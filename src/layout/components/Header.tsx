import Image from "next/image";
import SiteLogo from '@assets/png/sitelogo.png'
import {HeaderInternalLink} from "@components/links/LayoutLinks";
import {Container} from "@components/Container";
import {HamburgerMenu} from "@components/Hamburger";


export function DesktopHeader (): JSX.Element {
    return (
        <header className='fixed mb-20 top-0 flex w-full bg-brand-green-500 border-b-2 border-brand-green-500 shadow-lg'>
            <Container>
                <div className='flex  flex-row items-center justify-between w-full'>
                    <div className=''>
                        <Image src={SiteLogo} alt='eatlater logo' width={150} height={81}  />
                    </div>
                    <Navbar />
                    <DownloadButton />
                    <HamburgerMenu  />
                </div>
            </Container>
        </header>
    )
}



function Navbar (): JSX.Element {
    return (
        <nav className='hidden md:block bg-brand-orange-500 rounded-[20px] py-4 shadow-lg px-5'>
            <ul className='flex flex-row items-center justify-between space-x-4'>
                <HeaderInternalLink text='Vendors'  testId="Header.Navbar.Link.Vendors" sectionName="#vendors" />
                <HeaderInternalLink text='Riders'  testId="Header.Navbar.Link.Riders" sectionName="#riders" />
                <HeaderInternalLink text='Enterprise'  testId="Header.Navbar.Link.Enterprise" sectionName="#enterprise" />
                <HeaderInternalLink text='How it works'  testId="Header.Navbar.Link.How-it-works" sectionName="#how-it-works" />
            </ul>
        </nav>
    )
}


function DownloadButton (): JSX.Element {
    return (
        <div className='hidden md:block'>
            <button className="text-brand-black-500 bg-white rounded-lg px-7 py-4 text-lh font-semibold">
                Download app
            </button>
        </div>
    )
}
