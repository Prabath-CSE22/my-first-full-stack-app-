import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDes.css';

const ProductDes = () => {
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    fethdata();
  }, []);

  const {id} = useParams();

  const fethdata = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/givedata/${id}`);
      setProduct(response.data);
    }catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className='container'>
        <div>
          <h1>{product.product_name}</h1>
          <img src={`../src/assets/${product.ID}.jpeg`} alt={product.product_name} />
        </div>
        <div className='hibox'>
          <p>{product.product_des}</p>
        </div>
        </div>
        <div className='comment-box'>
          <h3>Comments</h3>
          <form action="" method="post">
            <textarea name="comment" id="comment"></textarea><br />
            <button type='submit'>Comment</button>
          </form>
        </div>
      {/* </div> */}
    </>
  )
}

export default ProductDes
