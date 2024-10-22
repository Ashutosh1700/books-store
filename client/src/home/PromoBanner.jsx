import React from 'react'
import { Link } from 'react-router-dom'
import PromoImg from '../assets/awardbooks.png'

const PromoBanner = () => {
    return (
        <div className='mt-16 py-12 bg-teal-100 lg:px-24'>
            <div className='flex justify-between items-center flex-col md:flex-row gap-12'>
                <div className='md:w-1/2'>
                    <h2 className='text-4xl font-bold mb-6 leading-snug'>2024 National Book Award Winner for Fiction Shortlist</h2>
                    <Link to="/shop" className='mt-5 block'><button className=' rounded bg-blue-700 text-white font-semibold px-5 py-2 hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>
                </div>
                <div>
                    <img src={PromoImg} alt="PromoImage" className='w-96' />
                </div>
            </div>
        </div>
    )
}

export default PromoBanner