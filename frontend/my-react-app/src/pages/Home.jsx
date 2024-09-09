import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios' 
import Card from '../components/card';

const Home = () => {
    useEffect(() => {
    fetchData();
    }, []);

    const [rowData, setRowData] = useState([]);


    const fetchData = async () => {
        const response = await axios.get('http://localhost:8080/givedata');
        setRowData(response.data);
    };
    return (
        <div className='homepage'>
            <div className='nav'>
                <h1>hiii</h1>
            </div>
            <div className="product-list">
                {rowData.map(product => (
                <Card key={product.ID} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Home
