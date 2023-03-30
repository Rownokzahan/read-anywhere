import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []);

  const handleReadTime = time => {
    setReadTime(readTime + time);
  }

  return (
    <div className='max-w-[1440px] mx-auto'>
      <Header></Header>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='col-span-2'>
          {blogs.map(blog => <Blog blog={blog} handleReadTime={handleReadTime} key={blog.id}></Blog>)}
        </div>
        <Sidebar readTime={readTime}></Sidebar>
      </div>
    </div>
  );
};

export default App;