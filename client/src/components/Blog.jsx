import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, BookOpen, Heart, MessageCircle, Share2, Search, Filter, TrendingUp, Star, Eye } from 'lucide-react';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    const categories = ['All', 'Book Reviews', 'Author Spotlights', 'Reading Tips', 'Literary News', 'Community'];

    const blogPosts = [
        {
            id: 1,
            title: "The Rise of Digital Reading: How E-books Are Changing Literature",
            excerpt: "Exploring the impact of digital transformation on reading habits and the publishing industry in the modern era.",
            author: "Sarah Mitchell",
            date: "July 25, 2025",
            readTime: "8 min read",
            category: "Literary News",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
            likes: 234,
            comments: 18,
            featured: true
        },
        {
            id: 2,
            title: "10 Must-Read Books That Will Transform Your Perspective",
            excerpt: "A curated list of transformative books that challenge conventional thinking and inspire personal growth.",
            author: "Michael Chen",
            date: "July 23, 2025",
            readTime: "12 min read",
            category: "Book Reviews",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
            likes: 456,
            comments: 32,
            featured: false
        },
        {
            id: 3,
            title: "Author Spotlight: Emma Rodriguez on Modern Fiction",
            excerpt: "An exclusive interview with bestselling author Emma Rodriguez about her latest novel and writing process.",
            author: "David Park",
            date: "July 20, 2025",
            readTime: "6 min read",
            category: "Author Spotlights",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=400&fit=crop",
            likes: 189,
            comments: 24,
            featured: false
        },
        {
            id: 4,
            title: "Building the Perfect Reading Nook: Design Tips for Book Lovers",
            excerpt: "Create your ideal reading space with these expert design tips and cozy decoration ideas for book enthusiasts.",
            author: "Lisa Johnson",
            date: "July 18, 2025",
            readTime: "5 min read",
            category: "Reading Tips",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
            likes: 312,
            comments: 45,
            featured: false
        },
        {
            id: 5,
            title: "Community Reads: July Book Club Discussions",
            excerpt: "Join our vibrant community discussions about this month's featured books and share your thoughts with fellow readers.",
            author: "BookHub Team",
            date: "July 15, 2025",
            readTime: "4 min read",
            category: "Community",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
            likes: 278,
            comments: 67,
            featured: false
        },
        {
            id: 6,
            title: "Speed Reading Techniques That Actually Work",
            excerpt: "Evidence-based strategies to improve your reading speed while maintaining comprehension and enjoyment.",
            author: "Dr. Amanda Wright",
            date: "July 12, 2025",
            readTime: "10 min read",
            category: "Reading Tips",
            image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&h=400&fit=crop",
            likes: 521,
            comments: 38,
            featured: false
        }
    ];

    useEffect(() => {
        let filtered = blogPosts;

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(post => post.category === selectedCategory);
        }

        if (searchTerm) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredPosts(filtered);
    }, [selectedCategory, searchTerm]);

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .line-clamp-2 {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .line-clamp-3 {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }
                @media (max-width: 640px) {
                    .line-clamp-3 {
                        -webkit-line-clamp: 2;
                    }
                }
            `}</style>
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">BookHub Blog</h1>
                        <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                            Discover insights, reviews, and stories from the world of literature
                        </p>
                    </div>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="max-w-7xl mx-auto px-6 py-8 overflow-x-auto scrollbar-hide">
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    <div className="flex items-center gap-3 overflow-x-auto pb-2">
                        <Filter className="text-gray-500 w-5 h-5 flex-shrink-0" />
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${selectedCategory === category
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Post */}
            {featuredPost && selectedCategory === 'All' && !searchTerm && (
                <div className="max-w-7xl mx-auto px-6 mb-12">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <div className="lg:flex">
                            <div className="lg:w-1/2">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-64 lg:h-full object-cover"
                                />
                            </div>
                            <div className="lg:w-1/2 p-8 lg:p-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        Featured
                                    </span>
                                    <span className="text-indigo-600 font-medium">{featuredPost.category}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-indigo-600 transition-colors cursor-pointer">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            {featuredPost.author}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {featuredPost.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {featuredPost.readTime}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Heart className="w-4 h-4" />
                                            {featuredPost.likes}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MessageCircle className="w-4 h-4" />
                                            {featuredPost.comments}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="grid gap-8">
                            {regularPosts.map(post => (
                                <div key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                    <div className="md:flex">
                                        <div className="md:w-1/3">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="md:w-2/3 p-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded text-sm font-medium">
                                                    {post.category}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors cursor-pointer">
                                                {post.title}
                                            </h3>

                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                                    <div className="flex items-center gap-1">
                                                        <User className="w-3 h-3" />
                                                        {post.author}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {post.date}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        {post.readTime}
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                                        <Heart className="w-4 h-4" />
                                                        {post.likes}
                                                    </div>
                                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                                        <MessageCircle className="w-4 h-4" />
                                                        {post.comments}
                                                    </div>
                                                    <button className="text-gray-400 hover:text-indigo-600 transition-colors">
                                                        <Share2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Popular Posts */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-indigo-600" />
                                Popular This Week
                            </h3>
                            <div className="space-y-4">
                                {blogPosts.slice(0, 4).map((post, index) => (
                                    <div key={post.id} className="flex gap-3 group cursor-pointer">
                                        <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </h4>
                                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                                                <Eye className="w-3 h-3" />
                                                {post.likes * 3} views
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                            <p className="text-indigo-100 mb-4">Get the latest articles and book recommendations delivered to your inbox.</p>
                            <div className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white/50"
                                />
                                <button className="w-full bg-white text-indigo-600 font-medium py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Fiction', 'Non-fiction', 'Mystery', 'Romance', 'Sci-Fi', 'Biography', 'Self-Help', 'Poetry'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-indigo-100 hover:text-indigo-700 cursor-pointer transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;