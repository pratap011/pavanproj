// PostDetailPage.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const PostDetailPage = ({ match }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const poststring = window.location.href.split("/") // Get post ID from URL parameter
  const postId=poststring[poststring.length-1];
  

  const fetchPost = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  return (
    <div className="container mt-5">
      <h1>Post Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default PostDetailPage;
