import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import useAppContext from '../store/store';

export const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [cover, setCover] = useState('');

  const navigate = useNavigate();
  const store = useAppContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'desc':
        setDesc(value);
        break;
      case 'price':
        setPrice(value);
        break;
      default:
        break;
    }
  }

  const handleChangeFile = (e) => {
    const element = e.target;
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: crypto.randomUUID(),
      title,
      desc,
      price,
      cover
    }

    console.log(newProduct);
    //Agreagr a items principal
    store.createItem(newProduct);

    //Ir a productos
    navigate('/');
  }

  return (
    <Layout>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <p className="form-title">Create new Product</p>

        <p className="form-title">Title</p>
        <div className="input-container">
          <input
            placeholder="Enter the title of the product"
            type="text"
            name='title'
            value={title}
            onChange={handleChange}
          />
        </div>

        <p className="form-title">Description</p>
        <div className="input-container">
          <input
            placeholder="Enter the description of the product"
            type="text"
            name='desc'
            value={desc}
            onChange={handleChange}
          />
        </div>

        <p className="form-title">Price</p>
        <div className="input-container">
          <input
            placeholder="Enter the price of the product"
            type="number"
            name='price'
            value={price}
            onChange={handleChange}
          />
        </div>

        <p className="form-title">Image</p>
        <div className="input-container">
          <input
            type="file"
            name="cover"
            className="cover-input"
            onChange={handleChangeFile}
          />
        </div>

        <div>
          {!!cover ? <img src={cover} width='200' alt="preview" /> : ''}
        </div>

        <button
          className="submit"
          type="submit"
        >
          Add product
        </button>
      </form>
    </Layout>
  )
}
