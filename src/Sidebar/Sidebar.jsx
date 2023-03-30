import React from 'react';

const Sidebar = (props) => {
    const { readTime } = props;
    return (
        <div>
            <div className='py-4 rounded-md text-purple bg-light-purple border border-purple mb-6'>
                <h3 className='text-primary text-center text-2xl font-semibold'>Spent time on read : {readTime} min</h3>
            </div>

            <div className='p-8 rounded-md bg-gray-light'>
                <h3 className='text-2xl font-semibold'>Bookmarked Blogs : 8</h3>
                <div className='grid gap-4 mt-4 font-semibold'>
                    <div className='p-5 rounded-md bg-white'>
                        Master Microsoft Power Platform and Become an In-Demand!
                    </div>
                    <div className='p-5 rounded-md bg-white'>
                        Master Microsoft Power Platform and Become an In-Demand!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;