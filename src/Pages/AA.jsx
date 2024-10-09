
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import card from '../Assets/Group 11.svg'
function AA() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://kstraining-server.vercel.app/api/blog/all');
          const data = await response.json();
          setBlogs(data.data);
        } catch (error) {
          console.error('Error fetching blog data:', error);
        }
      };
  
      fetchData();
    }, []);
  return (
   <>
     <div className='blog-cardsa'>
          {blogs.map(blog => (
           
              <div className='blog-carda'>
                <img src={card} alt={`Card for ${blog.title}`} />
                <div className='blogdesc'>
                  <h1>{blog.title}</h1>
                  <p>{blog.content}</p>
                  <h6><i className="bi bi-calendar2-week"></i>{blog.publishDate}</h6>
                  <button>Read More <i className="bi bi-arrow-right-circle"></i></button>
                </div>
              </div>
           
          ))}
        </div>
   </>
  )
}

export default AA