import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
const Blog = (props) => {
    const { id, images, author_name, blog_title, read_time, publish_date } = props.blog;
    return (
        <div>
            <img className='w-full rounded h-96 mb-8' src={images?.blog_cover_image } alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-6'>
                    <img className='w-12 h-12 rounded-full' src={images?.author_image} alt="" />
                    <div>
                        <h5 className='font-bold text-xl'>{ author_name }</h5>
                        <p className='text-gray'>{publish_date} (4 Days ago)</p>
                    </div>
                </div>
                <div className='text-gray flex gap-3'>
                    <p>{read_time} minutes read</p>
                    <button onClick={() => props.handleBookMarks(id)}><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-2xl font-bold my-4'>{blog_title}</h2>
            <p className='text-gray mb-5'>#beginners #programming</p>

            <button onClick={() => props.handleReadTime(read_time)} className='text-purple underline font-semibold'>Mark as read</button>

            <hr className='my-10 text-gray' />
        </div>
    );
};

export default Blog;