import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Heart, ArrowRight, Facebook, Twitter, Instagram, Github, Linkedin } from 'lucide-react';

const MyFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-16">
                {/* Top Section */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                BookHub
                            </h3>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Your ultimate destination for buying, selling, reading, and managing books. Join our community of passionate readers worldwide.
                        </p>
                        <div className="flex items-center gap-2 text-indigo-400">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">Made with love for book lovers</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'How It Works', 'Pricing', 'Blog', 'Community', 'Success Stories'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
                        <ul className="space-y-3">
                            {['Buy Books', 'Sell Books', 'Read Online', 'Manage Library', 'Book Reviews', 'Author Connect'].map((service) => (
                                <li key={service}>
                                    <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                                    <Mail className="w-4 h-4 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="text-white">hello@bookhub.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                                    <Phone className="w-4 h-4 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <p className="text-white">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-4 h-4 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Address</p>
                                    <p className="text-white">123 Book Street, NY 10001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-indigo-500/20">
                    <div className="text-center max-w-2xl mx-auto">
                        <h4 className="text-2xl font-bold mb-3 text-white">Stay Connected</h4>
                        <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest book recommendations, author interviews, and literary news.</p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                                Subscribe
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700/50 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <div className="flex items-center gap-2 text-gray-400">
                            <span>© {currentYear} BookHub™. All rights reserved.</span>
                            <span className="hidden md:inline">|</span>
                            <span className="text-sm">Built with passion for readers</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Facebook, href: '#', label: 'Facebook' },
                                { icon: Twitter, href: '#', label: 'Twitter' },
                                { icon: Instagram, href: '#', label: 'Instagram' },
                                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                                { icon: Github, href: '#', label: 'GitHub' }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-gray-700/50 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
                                >
                                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                                </a>
                            ))}
                        </div>

                        {/* Legal Links */}
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Privacy Policy</a>
                            <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Terms of Service</a>
                            <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        </footer>
    );
};

export default MyFooter;