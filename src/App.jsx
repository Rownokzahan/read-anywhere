import React, { useEffect, useState } from 'react';
import SingleBlog from './SingleBlog/SingleBlog';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './Blog/Blog';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [bookMarks, setBookMarks] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []);

  const handleReadTime = time => {
    setReadTime(readTime + time);
  }

  const handleBookMarks = blogId => {
    const blog = blogs.find(blog => blog.id === blogId);

    const alreadyExist = bookMarks.find(blog => blog.id === blogId)
    if (!alreadyExist) {
      setBookMarks([...bookMarks, blog])
    }
    else {
      toast("You Have Already Bookmarked This Blog");
    }
  }
  
  return (
    <div className='max-w-[1440px] mx-auto px-4 md:px-8'>
      <Header></Header>

      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-6 relative'>
        <div className='col-span-2'>
          {blogs.map(blog => <SingleBlog
            blog={blog}
            handleReadTime={handleReadTime}
            handleBookMarks={handleBookMarks}
            key={blog.id}
          ></SingleBlog>)}
        </div>

        <div className='sticky top-0 right-0 h-max'>          
          <Sidebar
            bookMarks={bookMarks}
            readTime={readTime}
          ></Sidebar>

          <ToastContainer />
        </div>
      </div>
      
      <Blog></Blog>

    </div>
  );
};

export default App;