import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer flex flex-col items-center justify-center gap-4 bg-black/30 text-neutral-content py-10 px-6 text-center md:px-16">
            {/* Company: Logo + Name */}
            <div className="flex items-center gap-0">
                <img src="/assets/logo.png" alt="Logo" className="w-6 h-6" />
                <span className="text-xl font-bold">rigold</span>
            </div>

            <div className='md:w-2xl text-gray-400'>
                <p>
                    Power Up Your Payments with Precision — Take control of your business finances with our advanced billing system designed for accuracy.
                </p>
            </div>

            {/* Copyright */}
            <div className="text-base font-medium flex">
                © 2025 All rights reserved by <span className='text-purple-300'>fazle shifat</span>
            </div>

            {/* Links */}
            <div className="flex gap-4">
                <Link to="/" className="link link-hover text-base">Home</Link>
                <Link to="/about" className="link link-hover text-base">About</Link>
                <Link to="/contact" className="link link-hover text-base">Contact</Link>
            </div>
        </footer>

    );
};

export default Footer; <h3>Here is footer</h3>