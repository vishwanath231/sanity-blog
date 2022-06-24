import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='container max-w-screen-lg mx-auto p-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <Link to='/' className='text-3xl font-bold cursive text-red-400'>Blogger</Link>
                        <Link to='/author' className='ml-5 sen-font'>Author</Link>
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href='https://www.facebook.com/vishwanath231/' target='_blank' rel="noopener noreferrer" className='text-gray-400 mr-3 hover:text-red-400'><BsFacebook /></a>
                        <a href='https://www.instagram.com/vishwanath.official/' target='_blank' rel="noopener noreferrer" className='text-gray-400 mr-3 hover:text-red-400'><BsInstagram /></a>
                        <a href='https://twitter.com/vishwanath231' target='_blank' rel="noopener noreferrer" className='text-gray-400 mr-3 hover:text-red-400'><BsTwitter /></a>
                        <a href='https://www.linkedin.com/in/vishwanath231' target='_blank' rel="noopener noreferrer" className='text-gray-400 hover:text-red-400'><BsLinkedin /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;