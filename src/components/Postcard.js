
import React from 'react';
import '../css/postcard.css';

function Postcard(props) {
  const { blogs } = props;

  if (!blogs || !blogs.data) {
    return null;
  }

  const bloglist = blogs.data;

  return (
    <>
      {bloglist.length > 0 ? (
        bloglist.map((blog) => (
          <div className='w-75 mx-auto mt-5 card_main' key={blog.id}>
            <div className='card mb-3 custom-card'>
              <div className='card-body'>
                <h5 className='card-title'>{blog.title}</h5>
                <p className='card-text'>{blog.description}</p>
                <p className='card-text'>
                  <small className='text-muted'>Last updated at {blog.updatedAt}</small>
                </p>
              </div>
              <div className='card-footer'>
                <h5>
                  <span>Author</span> {blog.name}
                </h5>
              </div>
            </div>
          </div>
        ))
      ) : (
        ''
      )}
    </>
  );
}

export default Postcard;
