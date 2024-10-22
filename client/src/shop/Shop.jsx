import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';

const Shop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-book')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return (
        <div className='mt-28 px-4 '>
            <h2 className='text-5xl font-bold text-center '>All Books </h2>

            <div className=' gap-8 my-12 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
                {books.map(book =>
                    <Card
                    >
                        <img src={book.imageURL} alt="" className='h-w-96' />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>{book.bookTitle}</p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </p>
                        <button className='bg-blue-700 font-semibold text-white rounded py-2'>Buy Now</button>
                    </Card>
                )}
            </div>

        </div>
    )
}

export default Shop