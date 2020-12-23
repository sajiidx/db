import React, { useEffect, useState } from 'react';
import axios from "./axios";
import './Product.css'

function Product(){
    const [products, setProducts] = useState([]);
    var fetchUrl = "/product";
    var body = {};
    useEffect(() => {
        async function fetchData(){
            let request;
            if(fetchUrl == "/product"){
                request = await axios.get(fetchUrl);
            }
            else{
                request = await axios({
                    url: "/product/cat",
                    method: "GET",
                    data: {
                        cat_id: body.cat_id,
                    }
                });
            }
            
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
                item: product.pid
            }
        })
        console.log(response)
    }

    const fetchProducts = async (e) =>{
        if(e.target.value ==='all'){
            fetchUrl = "/product";
            const request = await axios.get("/product");
            console.log(request);
            setProducts(request.data.response);
            console.log(e.target.value)
        }
        else{
            fetchUrl = "/product/cat";
            let body = {
                cat_id: e.target.value
            }
            const request = await axios({
                url: "/product/cat",
                method: "GET",
                data: {
                    cat_id: e.target.value,
                }
            });
            console.log(request);
            setProducts(request.data.response);
            console.log(e.target.value)
        }
    }

    return (
        <div className="products">
            <h2>Products</h2>
            <label for="categories">Category:    </label>
            <select onChange={(e) => fetchProducts(e)} name="category: " id="category">
                <option value="all">all</option>
                <option value="bags">bags</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
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