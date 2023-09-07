'use client'
import Image from 'next/image'
import { CustomButton } from '.'

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className=' p-3 lg:p-5 flex flex-col lg:flex-row gap-5 justify-center items-center'>
        <div className='p-5 lg:w-[50%] min-h-[50vh] flex flex-col justify-center items-center'>
            <h1 className='text-xl font-bold sm:text-3xl md:text-4xl lg:text-6xl'>Find, book, rent a car-quick and super easy!</h1>
            <p className='pt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, minus, eos debitis dignissimos modi magnam non accusantium similique ullam iure omnis eum beatae dolores ad corporis voluptates, velit hic enim.</p>

            <div>
                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-blue-600 text-white rounded-full mt-10 px-10 py-5 text-lg shadow-2xl"
                    handleClick={handleScroll}
                    />
            </div>
        </div>
        <div className='hero__image-container '>
            <div className='hero__image '>
                <Image loading="lazy" src={'/hero.png'} alt="hero" fill className='w-[70%] object-contain'/>
            </div>
            <div className='hero__image-overlay' />
        </div>
    </div>
  )
}

export default Hero