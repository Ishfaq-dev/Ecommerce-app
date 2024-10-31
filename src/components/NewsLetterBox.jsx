import React from 'react';

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        // Handle subscription logic here
    };

    return (
        <div className='text-center my-2 mx-6'>
            <p className="text-2xl font-medium text-gray-800">Subscribe now for 20% Off</p>
            <p className="text-gray-400 mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, est.</p>
            <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
                <input 
                    type="email" 
                    className='w-full sm:flex-1 outline-none' 
                    placeholder='Enter your email' 
                    required 
                />
                <button type="submit" className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
    );
};

export default NewsLetterBox;
