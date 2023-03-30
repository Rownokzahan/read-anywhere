import React from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
const Blog = (props) => {
    return (
        <div>
            <img className='w-full rounded h-96 mb-8' src={"https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-6'>
                    <img className='w-12 h-12 rounded-full' src={"https://img.freepik.com/free-photo/mature-man-working-from-home_23-2148465290.jpg?w=1060&t=st=1680192335~exp=1680192935~hmac=d4e9866ed3b9a98cc52448d00ee56496c6fb03c8429bd717a5e7c5107069d0d7"} alt="" />
                    <div>
                        <h5 className='font-bold text-xl'>Mr. Raju</h5>
                        <p className='text-gray'>Mar 14 (4 Days ago)</p>
                    </div>
                </div>
                <div className='text-gray flex gap-3'>
                    <p>05 min read</p>
                    <button onClick={() => console.log("hi")}><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-2xl font-bold my-4'>{"Modern PHP Without a Framework"}</h2>
            <p className='text-gray mb-5'>#beginners #programming</p>

            <button className='text-purple underline font-semibold'>Mark as read</button>

            <hr className='my-10 text-gray' />
        </div>
    );
};

export default Blog;