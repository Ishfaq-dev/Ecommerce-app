import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div>
            {/* Outer container for layout styling */}
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mx-6 mt-40 text-sm'>
                {/* Logo and description section */}
                <div>
                    <img src={assets.logo} alt="Logo" className='mb-5 w-32' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Soluta facere eos reprehenderit modi quo exercitationem omnis nisi necessitatibus voluptates 
                        perspiciatis accusantium delectus, ab similique! Harum ipsum ipsa ut quas incidunt!
                    </p>
                </div>

                {/* Company section */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* Get in touch section */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+0123498765</li>
                        <li>Example@gmail.com</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>

            {/* Footer bottom section */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>
                    Copyright 2024 @Forever.com - All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
