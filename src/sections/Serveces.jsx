import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import service1 from '../assets/service1.webp'
import service2 from '../assets/service2.webp'
import service3 from '../assets/service3.webp'



const Serveces = () => {

  useEffect( () => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false
    })
})

  return (
    <div className="w-full h-full bg-gray-200 flex flex-col lg:items-center items-start lg:px-22 px-5 lg:py-22 py-20">
      <div className="flex flex-col items-center justify-center sm:justify-start">
        <h1 data-aos="zoom-in" delay="100" className="text-gray-800 lg:font-bold font-semibold lg:text-5xl text-3xl font-fahkwang">Discover Your Next Dream Destination</h1>
        <h1 data-aos="zoom-in" delay="200" className="text-gray-400 mt-3 px-10 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat assumenda,commodi omnis, quaerat optio quod velit molestiae sit amet consectetur, adipisicing elit. et rerum!</h1>
        <hr className='w-[10%] border-2 mt-3 rounded-2xl text-orange-500 ' />
      </div>

      <div className='w-full h-full flex flex-col lg:flex-row lg:items-center items-start gap-3 lg:px-22 px-5 lg:py-22 py-20'>
        
        <div className='w-full h-[300px] lg:w-1/2  lg:h-full flex flex-col lg:flex-row gap-3'>
          <div>
            <img data-aos="zoom-in" delay="100" className='w-full h-full rounded-2xl object-cover' src={service1} alt="" />
          </div>
          <div>
            <img data-aos="zoom-in" delay="200" className='w-full h-full rounded-2xl  object-cover' src={service2} alt="" />
          </div>
        </div>

        <div className='w-full h-[300px]  lg:w-1/2 lg:h-full'>
          <img data-aos="zoom-in" delay="300" className='w-full h-full rounded-2xl object-cover' src={service3} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Serveces