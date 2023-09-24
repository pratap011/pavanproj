import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './postsPage.css'; // Import custom CSS file
import { Link } from 'react-router-dom'; 

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">List of Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {posts.map(post => (
            <div className="card post-card mb-4" key={post.id}>
              <div className="card-body">
              <Link to={`/post/${post.id}`}>{post.title}</Link>
                {/* <h5 className="card-title" > {post.title}</h5> */}
                <br></br>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          ))}
          <div style={{display:"flex", justifyContent:"center", gap:"0.5rem"}}>
            <button className="btn btn-primary" onClick={handlePrevPage} disabled={page === 1}>
              Previous
            </button>
            <button className="btn btn-primary ml-2" onClick={handleNextPage}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsPage;
