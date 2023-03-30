import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const App = () => {

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []);

  return (
    <div className='max-w-[1440px] mx-auto'>
      <Header></Header>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className='col-span-3'>

        </div>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default App;