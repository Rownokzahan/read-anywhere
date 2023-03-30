import React, { useEffect, useState } from 'react';
import Header from './Header/Header';

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
    </div>
  );
};

export default App;