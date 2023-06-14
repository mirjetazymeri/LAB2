import React, { useState } from 'react';
import postServices from '../services/postServices';
import '../style/create.css'

const CreateComponent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [countInStock, setCount] = useState('');
  const [brand, setBrand] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);
    formData.append('countInStock', countInStock);
    formData.append('brand', brand);

    const response = await postServices.create(formData);
    if (response.data.success === true) {
      setMessage('Post created successfully');
    } else {
      setMessage('Post failed');
    }

    setTimeout(function () {
      setMessage('');
    }, 2000);

    event.target.reset();
  };

  return (
    <div className="create-component">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="price"
          placeholder="Enter the price"
          onChange={(event) => setPrice(event.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="file"
          name="image"
          onChange={(event) => setImage(event.target.files[0])}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="countInStock"
          placeholder="Enter the stock"
          onChange={(event) => setCount(event.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="brand"
          placeholder="Enter the brand name"
          onChange={(event) => setBrand(event.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateComponent;
