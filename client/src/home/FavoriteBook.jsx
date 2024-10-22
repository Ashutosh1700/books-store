import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';

const FavoriteBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-book').then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
    }, [])

    return (
        <div>
            <BookCard books={books} headline={'Best Seller Book'} />
        </div>
    )
}

export default FavoriteBook