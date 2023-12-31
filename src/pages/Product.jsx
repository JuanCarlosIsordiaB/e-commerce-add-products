import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import useAppContext from "../store/store";
import React from 'react'
import { Layout } from '../components/Layout';

export const Product = () => {

  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const product = store.getItem(params.productId);
    setItem(product);
  }, []);

  if(!item){
    return <Layout>Item not found</Layout>
  }
  return (
    <Layout>
      <div className="">
        <h2>{item?.title}</h2>
        <div className="">
          {item?.cover && <img src={item?.cover} alt={item.title} className="cover-image" />}
        </div>
        <div className="">{item?.desc}</div>
        <div className="">${item?.price}</div>
        <button onClick={() => console.log(`Comprando ${item.title}`)}>Comprar</button>
    
      </div>
    
    </Layout>
    
  );
};
