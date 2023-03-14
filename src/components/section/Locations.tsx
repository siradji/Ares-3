import { Container } from '@components/Container'
import Link from 'next/link'
import { Slide } from 'react-awesome-reveal'


const LOCATIONS = [
    {
        state: 'Abuja',
        cities: [
            'Wuse',
            'Gwarimpa',
            'Asokoro',
            'CBD'
        ]
    }, 

]
export function Locations (): JSX.Element {
    return (
        <section>
            <Container>
                <div>
                    <div className='flex flex-row w-full justify-center'>
                        <Slide>
                            <h1 className='font-bold text-lg md:text-3xl mb-5'>EatLater Available Locations</h1>
                        </Slide>
                    </div>
                    <div className='flex flex-col'>
                        {LOCATIONS.map(({cities, state}, index) => (
                            <LocationCard key={`${state}-${index}`}  cities={cities} state={state} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )

}

export function LocationCard ({cities, state}: {cities: string[], state: string}): JSX.Element{ 
    return (
       <div className='flex flex-col'>
        <div>
            <h1 className='font-bold text-xl text-black mb-2'>{state}</h1>
        </div>
        <div className='flex flex-row flex-wrap md:space-x-3'>
            {cities.map((city, index) => (
                 <div key={index + city} className='border-0.5 bg-white flex flex-row justify-center items-center border-gray-300 p-1 w-36 md:w-60 h-14 md:h-20 m-1 md:m-0'>
                 <Link href="#" className='font-bold text-sm md:text-lg text-black'>
                     {city}
                 </Link>
             </div>
            ))}
        </div>
       </div>
    )
}