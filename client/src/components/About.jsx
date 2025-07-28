import React, { useState, useEffect } from 'react';
import { BookOpen, ShoppingCart, DollarSign, Library, Users, Star, Zap, Heart, Eye, TrendingUp } from 'lucide-react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            icon: ShoppingCart,
            title: "Buy Books",
            description: "Discover and purchase from thousands of titles",
            color: "from-blue-500 to-purple-600",
            bgColor: "bg-blue-50"
        },
        {
            icon: DollarSign,
            title: "Sell Books",
            description: "Turn your books into cash with our easy listing system",
            color: "from-green-500 to-emerald-600",
            bgColor: "bg-green-50"
        },
        {
            icon: BookOpen,
            title: "Read Online",
            description: "Access your digital library anywhere, anytime",
            color: "from-orange-500 to-red-600",
            bgColor: "bg-orange-50"
        },
        {
            icon: Library,
            title: "Manage Collection",
            description: "Organize and track your personal book collection",
            color: "from-purple-500 to-pink-600",
            bgColor: "bg-purple-50"
        }
    ];

    const stats = [
        { icon: Users, value: "50K+", label: "Active Users" },
        { icon: BookOpen, value: "100K+", label: "Books Available" },
        { icon: Star, value: "4.9", label: "User Rating" },
        { icon: TrendingUp, value: "95%", label: "Satisfaction Rate" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-20">
                    <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
                            <Zap className="w-4 h-4 mr-2" />
                            Your Complete Book Ecosystem
                        </div>
                        <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                            Welcome to BookHub
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            The ultimate platform where book lovers unite. Buy, sell, read, and manage your books all in one beautiful, intuitive space. Transform the way you experience literature.
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
                    <p className="text-xl text-gray-600">Four powerful features, one seamless experience</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isActive = activeFeature === index;

                        return (
                            <div
                                key={index}
                                className={`group relative p-8 rounded-2xl transition-all duration-500 cursor-pointer ${feature.bgColor} hover:shadow-2xl hover:scale-105 ${isActive ? 'ring-4 ring-indigo-300 shadow-2xl scale-105' : ''}`}
                                onMouseEnter={() => setActiveFeature(index)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl"></div>
                                <div className="relative">
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 transform transition-transform group-hover:rotate-6`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="text-white">
                                    <Icon className="w-8 h-8 mx-auto mb-4 opacity-80" />
                                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                    <div className="text-indigo-100">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            We believe books have the power to transform lives, spark imagination, and connect communities. BookHub was created to make literature more accessible, affordable, and enjoyable for everyone.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Whether you're a casual reader, a book collector, or someone looking to declutter their shelves, we've built the perfect ecosystem to serve all your literary needs.
                        </p>
                        <div className="flex items-center space-x-4">
                            <Heart className="w-6 h-6 text-red-500" />
                            <span className="text-gray-700 font-medium">Made with love for book enthusiasts</span>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl transform rotate-6"></div>
                        <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                                    <Eye className="w-8 h-8 mx-auto mb-2 text-indigo-600" />
                                    <div className="text-sm font-medium text-gray-700">Easy Discovery</div>
                                </div>
                                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                                    <Zap className="w-8 h-8 mx-auto mb-2 text-green-600" />
                                    <div className="text-sm font-medium text-gray-700">Lightning Fast</div>
                                </div>
                                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                                    <Star className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                                    <div className="text-sm font-medium text-gray-700">Premium Quality</div>
                                </div>
                                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                                    <Users className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                                    <div className="text-sm font-medium text-gray-700">Community Driven</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 text-white">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Join thousands of book lovers who've already discovered the BookHub experience
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                            Get Started Today
                        </button>
                        <button className="px-8 py-3 border border-gray-600 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-200">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;