import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './newPostPage.css'; // Import custom CSS file

const NewPostPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform API POST request to submit the new post
      // For example, using fetch or Axios
      // Replace the URL with your actual API endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          body: description,
        }),
      });

      if (response.status === 201) {
        setIsSuccess(true);
        // Clear form inputs after successful submission
        setTitle('');
        setDescription('');
        // Redirect to localhost:3000/home after successful submission
        window.location.href = 'http://localhost:3000/';
      } else {
        // Handle error cases here
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Error submitting new post:', error);
      setIsSuccess(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 offset-md-3"> {/* Decrease width */}
        <h1 className="mb-4">Create New Post</h1>
        {isSuccess && <div className="alert alert-success">Post submitted successfully!</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description (max 1000 characters)
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="4"
              value={description}
              onChange={handleDescriptionChange}
              maxLength="1000"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPostPage;
