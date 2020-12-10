import React, { useEffect, useState } from 'react';
import axios from "./axios";
import './Product.css'
import Button from '@material-ui/core/Button'

function Product({title, fetchUrl}){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            setProducts(request.data.response);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const handleClick = (product) => {
        if(!product){
            console.log('something went wrong')
        }
        else{
            console.log(product?.price);
        }
    }

    return (
        <div className="products">
            <h2>{title}</h2>
            <div className="products__box">
                {products.map((product) =>(
                    <div onClick={() => handleClick(product) } className="products__details">
                        <div className="product__box">
                            <h5>{product.pname}</h5>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product;