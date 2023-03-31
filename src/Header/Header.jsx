import React from 'react';

const Header = () => {
    return (
        <nav className='flex justify-between py-6 mb-10 border-b border-b-gray'>
            <a className='text-2xl md:text-3xl font-bold' href="/home">Read Anywhere</a>
            <a href="/profile">
                <img className="w-10 h-10 rounded-full" src="https://img.freepik.com/free-photo/close-up-photo-amicable-man-black-shirt-posing-his-passport-picture_132075-8192.jpg?w=360&t=st=1680193454~exp=1680194054~hmac=90ab720fb0ffdfcf0baaa212bed4f5088e8d700ab9a9f3ee9a453bc5d95821f9" alt="" />
            </a>
        </nav>
    );
};

export default Header;