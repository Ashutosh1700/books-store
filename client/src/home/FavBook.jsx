import React from 'react'
import FavImg from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavBook = () => {
    return (
        <div className='px-4 lg:px-24 my-20 flex justify-between flex-col sm:flex-row items-center gap-12'>
            <div className='md:w-1/2'>
                <img src={FavImg} alt="" className='rounded md:w-11/12' />

            </div>
            <div className='md:w-1/2 space-y-6'>
                <h2 className='font-bold text-4xl my-5 md:w-3/4 leading-snug'>Find Your Favourite <span className='text-blue-600'>Books Here!</span></h2>
                <p className='mb-10 text-lg md:w-5/6 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae aspernatur quas id officia animi minima nostrum repudiandae atque possimus aperiam! At laudantium unde debitis?</p>
                <div className='flex justify-between flex-col sm:flex-row gap-6 md:w-3/4 my-14 '>
                    <div>
                        <h3 className='text-3xl font-bold'>500+</h3>
                        <p className='text-base'>Book Listing</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className='text-base'>Register User</p>

                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1200+</h3>
                        <p className='text-base'>Pdf Downloaded</p>

                    </div>
                </div>
                <Link to="/shop" className='mt-5 block'><button className=' rounded bg-blue-700 text-white font-semibold px-5 py-2 hover:bg-black transition-all duration-300'>Explore Now</button></Link>
            </div>

        </div>
    )
}

export default FavBook