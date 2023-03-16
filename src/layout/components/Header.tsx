import Image from "next/image";
import SiteLogo from '@assets/png/sitelogo.png'
import {HeaderInternalLink} from "@components/links/LayoutLinks";
import {Container} from "@components/Container";
import {HamburgerMenu} from "@components/Hamburger";
import Link from 'next/link'

export function DesktopHeader (): JSX.Element {
    return (
        <header className='flex w-full bg-primary-500 shadow-lg'>
            <Container>
                <div className='flex  flex-row items-center justify-between w-full'>
                    <Link href='/' >
                        <Image src={SiteLogo} alt='eatlater logo' width={150} height={81}  />
                    </Link>
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
        <nav className='hidden md:block bg-white rounded-3xl py-4 shadow-lg px-5'>
            <ul className='flex flex-row items-center justify-between space-x-4'>
                <HeaderInternalLink text='Vendors'  testId="Header.Navbar.Link.Vendors" linkTo="vendors" />
                <HeaderInternalLink text='Riders'  testId="Header.Navbar.Link.Riders" linkTo="riders" />
                <HeaderInternalLink text='EatLater Enterprise'  testId="Header.Navbar.Link.Enterprise" linkTo="/enterprise" />
                <HeaderInternalLink text='How it works'  testId="Header.Navbar.Link.How-it-works" linkTo="how-it-works" />
            </ul>
        </nav>
    )
}


function DownloadButton (): JSX.Element {
    return (
        <div className='hidden md:block'>
            <button className="text-primary-500 bg-white rounded-3xl px-7 py-4 text-lg font-semibold">
                Download app
            </button>
        </div>
    )
}
