import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBookData = () => {
    const { _id, bookTitle, imageURL, category, bookDescription } = useLoaderData();
    return (
        <div className='mt-28 px-4 lg:px-24 flex'>
            <img src={imageURL} alt="" className='h-96' />
            <div className='px-10 mt-10'>
                <h2> <span className='font-bold'>BookTitle:</span>  {bookTitle} </h2>
                <h2> <span className='font-bold'>Category:</span> {category} </h2>
                <p><span className='font-bold'>BookDetail:</span> {bookDescription} </p>
            </div>

        </div>
    )
}

export default SingleBookData