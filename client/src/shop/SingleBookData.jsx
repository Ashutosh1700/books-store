import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, BookOpen, Users, Clock, Award, Tag, Eye, MessageCircle, ArrowRight, Plus, Minus } from 'lucide-react';

const SingleBookData = () => {
    // Mock data - replace with useLoaderData() in your actual implementation
    const mockData = {
        _id: '1',
        bookTitle: 'The Digital Renaissance: How Technology is Reshaping Literature',
        imageURL: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=800&fit=crop',
        category: 'Technology',
        bookDescription: 'An insightful exploration into how digital transformation is revolutionizing the way we create, consume, and interact with literature in the modern age.'
    };

    const { _id, bookTitle, imageURL, category, bookDescription } = mockData;
    const [activeTab, setActiveTab] = useState('description');
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);

    // Enhanced static data for better presentation
    const bookData = {
        id: _id || '1',
        title: bookTitle || 'The Digital Renaissance: How Technology is Reshaping Literature',
        image: imageURL || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=800&fit=crop',
        category: category || 'Technology',
        description: bookDescription || 'An insightful exploration into how digital transformation is revolutionizing the way we create, consume, and interact with literature in the modern age.',
        author: 'Dr. Sarah Mitchell',
        publisher: 'TechLit Publications',
        publishDate: 'March 2024',
        pages: 342,
        language: 'English',
        isbn: '978-0-123456-78-9',
        format: ['Hardcover', 'Paperback', 'E-book', 'Audiobook'],
        price: {
            hardcover: 29.99,
            paperback: 19.99,
            ebook: 12.99,
            audiobook: 16.99
        },
        rating: 4.7,
        reviews: 1247,
        inStock: 23,
        bestseller: true,
        tags: ['Technology', 'Literature', 'Digital Culture', 'Innovation', 'Future'],
        overview: `This groundbreaking work examines the intersection of technology and literature, exploring how digital innovations are transforming storytelling, publishing, and reader engagement. From AI-assisted writing to immersive virtual reality narratives, this book provides a comprehensive look at the future of literary expression.

Dr. Sarah Mitchell combines rigorous research with engaging prose to deliver insights that will captivate both tech enthusiasts and literature lovers. The book features interviews with leading authors, publishers, and technologists who are shaping the future of books.`,

        features: [
            'Comprehensive analysis of digital publishing trends',
            'Exclusive interviews with industry leaders',
            'Case studies of successful digital-first authors',
            'Predictions for the next decade of literature',
            'Practical guides for aspiring digital authors'
        ],

        tableOfContents: [
            { chapter: 1, title: 'The Dawn of Digital Literature', pages: '1-28' },
            { chapter: 2, title: 'AI and Creative Writing', pages: '29-67' },
            { chapter: 3, title: 'Virtual Reality Storytelling', pages: '68-112' },
            { chapter: 4, title: 'The Future of Publishing', pages: '113-156' },
            { chapter: 5, title: 'Reader Engagement in Digital Age', pages: '157-201' },
            { chapter: 6, title: 'Monetizing Digital Content', pages: '202-245' },
            { chapter: 7, title: 'Building Literary Communities Online', pages: '246-289' },
            { chapter: 8, title: 'The Next Chapter', pages: '290-342' }
        ],

        reviews: [
            {
                id: 1,
                user: 'Alex Thompson',
                rating: 5,
                date: 'July 20, 2025',
                comment: 'Absolutely fascinating read! Mitchell brilliantly captures how technology is reshaping literature. A must-read for anyone interested in the future of books.',
                helpful: 23
            },
            {
                id: 2,
                user: 'Maria Rodriguez',
                rating: 5,
                date: 'July 15, 2025',
                comment: 'As a writer, this book opened my eyes to so many possibilities. The chapter on AI-assisted writing was particularly enlightening.',
                helpful: 18
            },
            {
                id: 3,
                user: 'David Chen',
                rating: 4,
                date: 'July 10, 2025',
                comment: 'Well-researched and thought-provoking. Some sections were a bit technical, but overall an excellent exploration of digital literature.',
                helpful: 12
            }
        ],

        relatedBooks: [
            {
                id: 2,
                title: 'The Future of Reading',
                author: 'Jennifer Walsh',
                image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
                price: 24.99,
                rating: 4.5
            },
            {
                id: 3,
                title: 'Digital Storytelling Mastery',
                author: 'Robert Kim',
                image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=400&fit=crop',
                price: 22.99,
                rating: 4.3
            },
            {
                id: 4,
                title: 'Publishing Revolution',
                author: 'Lisa Anderson',
                image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
                price: 27.99,
                rating: 4.6
            }
        ]
    };

    const tabs = [
        { id: 'description', label: 'Description' },
        { id: 'contents', label: 'Table of Contents' },
        { id: 'reviews', label: `Reviews (${bookData.reviews.length})` },
        { id: 'details', label: 'Book Details' }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br mt-10 from-slate-50 via-white to-blue-50">



            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                {/* Main Book Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Book Image */}
                    <div className="space-y-4">
                        <div className="relative group">
                            <img
                                src={bookData.image}
                                alt={bookData.title}
                                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
                            />
                            {bookData.bestseller && (
                                <div className="absolute top-4 left-4">
                                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                        <Award className="w-4 h-4" />
                                        Bestseller
                                    </div>
                                </div>
                            )}
                            <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200">
                                <Eye className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>

                        {/* Format Options */}
                        <div className="max-w-md mx-auto">
                            <h4 className="font-medium text-gray-900 mb-3">Available Formats:</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {bookData.format.map(format => (
                                    <div key={format} className="p-3 border border-gray-200 rounded-lg text-center hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer transition-colors">
                                        <div className="text-sm font-medium">{format}</div>
                                        <div className="text-xs text-gray-500">${bookData.price[format.toLowerCase().replace('-', '')]}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Book Details */}
                    <div className="space-y-6">
                        {/* Title and Author */}
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-sm font-medium">
                                    {bookData.category}
                                </span>
                                {bookData.inStock <= 5 && (
                                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm font-medium">
                                        Only {bookData.inStock} left!
                                    </span>
                                )}
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                                {bookData.title}
                            </h1>
                            <p className="text-lg text-gray-600 mb-4">by <span className="font-medium text-indigo-600">{bookData.author}</span></p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {renderStars(bookData.rating)}
                                <span className="ml-2 text-lg font-medium">{bookData.rating}</span>
                            </div>
                            <div className="text-gray-500">
                                <span className="font-medium">{bookData.reviews.toLocaleString()}</span> reviews
                            </div>
                            <div className="flex items-center gap-1 text-gray-500">
                                <Users className="w-4 h-4" />
                                <span>{(bookData.reviews * 2.3).toFixed(0)}K readers</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {bookData.description}
                            </p>
                        </div>

                        {/* Key Features */}
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h3>
                            <ul className="space-y-2">
                                {bookData.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price and Actions */}
                        <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-3xl font-bold text-gray-900">${bookData.price.paperback}</div>
                                    <div className="text-sm text-gray-500">Paperback • Free shipping</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-500">E-book</div>
                                    <div className="text-xl font-medium text-indigo-600">${bookData.price.ebook}</div>
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className="flex items-center gap-4">
                                <span className="font-medium">Quantity:</span>
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="p-2 hover:bg-gray-100 transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="p-2 hover:bg-gray-100 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                                <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                                    <ShoppingCart className="w-5 h-5" />
                                    Add to Cart
                                </button>
                                <button className="flex-1 bg-white border-2 border-indigo-600 text-indigo-600 py-3 px-6 rounded-lg font-medium hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                                    <BookOpen className="w-5 h-5" />
                                    Read Sample
                                </button>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setIsWishlisted(!isWishlisted)}
                                    className={`flex-1 py-2 px-4 rounded-lg border transition-colors flex items-center justify-center gap-2 ${isWishlisted
                                        ? 'bg-red-50 border-red-200 text-red-600'
                                        : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                                    {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                                </button>
                                <button className="flex-1 bg-gray-50 border border-gray-200 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                    <Share2 className="w-4 h-4" />
                                    Share
                                </button>
                            </div>
                        </div>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">{bookData.pages} pages</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600">{bookData.language}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                    {/* Tab Navigation */}
                    <div className="border-b border-gray-200">
                        <div className="flex overflow-x-auto">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${activeTab === tab.id
                                        ? 'text-indigo-600 border-b-2 border-indigo-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6 lg:p-8">
                        {activeTab === 'description' && (
                            <div className="space-y-6">
                                <div className="prose max-w-none">
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {bookData.overview}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {bookData.tags.map(tag => (
                                            <span key={tag} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'contents' && (
                            <div>
                                <h3 className="text-xl font-semibold mb-6">Table of Contents</h3>
                                <div className="space-y-3">
                                    {bookData.tableOfContents.map(item => (
                                        <div key={item.chapter} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                                            <div>
                                                <div className="font-medium">Chapter {item.chapter}: {item.title}</div>
                                            </div>
                                            <div className="text-gray-500 text-sm">Pages {item.pages}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold">Customer Reviews</h3>
                                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                                        Write Review
                                    </button>
                                </div>
                                <div className="space-y-6">
                                    {bookData.reviews.map(review => (
                                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <div className="font-medium">{review.user}</div>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <div className="flex">{renderStars(review.rating)}</div>
                                                        <span className="text-sm text-gray-500">{review.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 mb-3">{review.comment}</p>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <button className="hover:text-indigo-600 transition-colors">
                                                    Helpful ({review.helpful})
                                                </button>
                                                <button className="hover:text-indigo-600 transition-colors">
                                                    Reply
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'details' && (
                            <div>
                                <h3 className="text-xl font-semibold mb-6">Book Details</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span className="font-medium">Author:</span>
                                            <span className="text-indigo-600">{bookData.author}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium">Publisher:</span>
                                            <span>{bookData.publisher}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium">Publication Date:</span>
                                            <span>{bookData.publishDate}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium">Pages:</span>
                                            <span>{bookData.pages}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span className="font-medium">Language:</span>
                                            <span>{bookData.language}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium">ISBN:</span>
                                            <span>{bookData.isbn}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium">Category:</span>
                                            <span>{bookData.category}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium">Stock:</span>
                                            <span className="text-green-600">{bookData.inStock} available</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Books */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookData.relatedBooks.map(book => (
                            <div key={book.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                                        {book.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1">
                                            {renderStars(book.rating)}
                                            <span className="text-sm text-gray-500 ml-1">{book.rating}</span>
                                        </div>
                                        <div className="font-bold text-indigo-600">${book.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBookData;