import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cartcard from '../components/Cartcard'
import {useParams} from 'react-router-dom';
  const Cart = () => {
  
    const [rowData, setRowData] = useState([]);

    const {id} = useParams();

    useEffect(() => {
      fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        const response = await axios.get(`http://localhost:8080/getallfromcart`);
        setRowData(response.data);
    } 

  return (
    <div>
      <h1>Cart</h1>
        {rowData.map(product => (
          <Cartcard key={product.ID} product={product} />
        ))}
    </div>
  )
}

export default Cart
