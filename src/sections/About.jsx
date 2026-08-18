import aboutimg1 from '../assets/about1.webp'
import aboutimg2 from '../assets/about2.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    AOS.init({
      duration:800,
      delay: 200,
      once: false,
    })
  }, [])

  return ( 

    <div className='flex flex-col lg:flex-row items-center justify-between gap-15 lg:px-22 px-5 lg:py-22 p-20 '>
      <div className='flex flex-col justify-center items-start'>
        <img data-aos ="zoom-in" delay="100" className='rounded-md' src={aboutimg1} alt="" />
        <img data-aos ="zoom-in" delay="200" className='rounded-md w-[40%] border-10 border-white -mt-[150px] -ml-[60px] -roted-52' src={aboutimg2} alt="" />
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='text-md font-fahkwang text-gray-600'>About Us</h1>
        <h1 data-aos="zoom-in" delay="300" className='lg:text-5xl 3-xl font-fahkwang capitalize font-semibold font-black'>empark on a helarious journey with our taravel expart</h1>
        <p data-aos="zoom-in" dely="400" className='font-semibold text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nihil!</p>
        <p data-aos="zoom-in" dely="500" className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni aliquid exercitationem accusamus voluptas at delectus corrupti minus distinctio ex laborum.</p>
        <hr className='w-full border-t border-gray-500' />
      </div>
  </div>

  )
}

export default About