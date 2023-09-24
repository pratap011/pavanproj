// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import PostsPage from './PostsPage';
import NewPostPage from './NewPostPage';
import PostDetailPage from './PostDetailPage';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/newpost" element={<NewPostPage />} />
          <Route path="/viewposts" element={<PostsPage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/" element={<PostsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

