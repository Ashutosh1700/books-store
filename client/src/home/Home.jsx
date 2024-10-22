import React from 'react'
import Banner from '../components/Banner'
import FavoriteBook from './FavoriteBook'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

const Home = () => {
    return (
        <div>
            <Banner />
            <FavoriteBook />
            <FavBook />
            <PromoBanner />
            <OtherBooks />
            <Review />
        </div>
    )
}

export default Home