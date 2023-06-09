import React from 'react';

const Sidebar = (props) => {
    const { readTime, bookMarks } = props;
    return (
        <div>
            <div className='py-4 rounded-md text-purple bg-light-purple border border-purple mb-6'>
                <h3 className='text-primary text-center text-xl md:text-2xl font-semibold'>Spent time on read : {readTime} min</h3>
            </div>

            <div className='p-5 md:p-8 rounded-md bg-gray-light'>
                <h3 className='text-xl md:text-2xl font-semibold'>Bookmarked Blogs : {bookMarks.length}</h3>
                <div className='grid gap-4 mt-4 font-semibold'>
                    {bookMarks?.map(bookMark =>
                        <div key={bookMark.id} className='p-5 rounded-md bg-white' >
                            <p>{bookMark.blog_title}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;