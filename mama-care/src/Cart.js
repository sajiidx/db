import React,{useState, useEffect} from 'react'
import axios from 'axios'

function Cart(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        var username = localStorage.getItem('username')
        async function fetchData(){
            const request = await axios({
                url: 'http://localhost:5040/cart/show',
                method: 'POST',
                data:{
                    cusername: username
                }
            });
            console.log(request.data.response[0].items);
            var list = []
            var pds = request.data.response[0].items;
            for(var i=0;i<pds.length;i++){
                const response = await axios({
                    url: 'http://localhost:5040/product/show',
                    method: 'POST',
                    data:{
                        pid: pds[i]
                    }
                });
                list.push(response.data.response)
            }
            console.log(list)
            setProducts(list);
            return request;
        }
        fetchData();
    },[]);

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
            <h2>Cart</h2>
            <div className="products__box">
                {products.map((product) =>(
                    <div onClick={() => handleClick(product) } className="products__details">
                        <div className="product__box">
                            <h5>{product.pname}</h5>
                            <h2>${product.price}</h2>
                            <div>
                                <div>
                                    <label for="quantity">Quantity: </label>
                                    <input type="number" name="quantity" min="1" max={product.quantity}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="order__button">
                <button>Place Order</button>
            </div>
        </div>
    )
}

export default Cart;