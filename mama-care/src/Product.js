import React, { useEffect, useState } from 'react';
import axios from "./axios";
import './Product.css'

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
    
    const addToCart = async (product) => {
        var username = localStorage.getItem('username')
        console.log("Username: ", username)
        const response = await axios({
            url: 'http://localhost:5040/cart/update',
            method: 'POST',
            data:{
                cusername: username,
                item: [
                    product.pid
                ]
            }
        })
        console.log(response)
    }

    return (
        <div className="products">
            <h2>{title}</h2>
            <div className="products__box">
                {products.map((product) =>(
                    <div onClick={() => handleClick(product) } className="products__details">
                        <div className="product__box">
                            <div className="image__box">
                                <img className="image" src={"http://localhost:5040/"+product.ProductImage} />
                            </div>
                            <h1 className="product__name">{product.pname}</h1>
                            <p className="product__price">${product.price}</p>
                            <div>
                                <button onClick={() => addToCart(product) }>Add to Chart</button>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product;