import {Container} from "@components/Container";

export function EatLaterEnterprise (): JSX.Element {
    return  (
        <section id='#enterprise' className='my-20'>
            <Container>
                <div>
                    <h1 className='font-bold text-xl md:text-3xl lg:text-4xl'>EatLater for Enterprise</h1>
                    <div className='mt-8 px-5 lg:px-32 py-20 bg-brand-green-500 rounded-3xl shadow-2xl justify-between items-center border-2 border-brand-green-500 flex flex-col lg:flex-row'>
                        <div className='flex w-full lg:w-1/2' />
                        <div className='text-white  w-full lg:w-1/2'>
                            <h1 className='font-medium text-3xl mb-4 w-9/12'>Enroll your employees on Eatlater Enterprise</h1>
                            <p className='leading-8 font-light text-lg'>
                                Eatlater Enterprise allows institutions to enroll employees on a monthly basis. Each employee then an allocated credit which can be used to order lunch and gets it delivered to the office.  We understand the predicament of employees going out for lunch. It decreases productivity and EatLater is here to solve that.
                            </p>
                            <button className='mt-10 py-2  px-4 lg:px-2 mx-auto lg:ml-auto rounded-lg bg-brand-orange-500 text-white flex items-center justify-center'>
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
