import React,{useState, useEffect} from 'react'
import axios from "axios"
import "./Order.css"
import { Redirect } from 'react-router-dom';
const Order = () => {
    const [order, setOrder] = useState({
        order_id: '',
        items: [
            {
                pid: '',
            }
        ],
        fname: '',
        lname: '',
        username: '',
        email: '',
        address: '',
        city: '',
        zipcode: '',
        phone: '',
    });

    let {order_id, items, fname, lname, username, email, address, city, zipcode, phone} = order;

    const onChange = e =>{
        console.log(e.target.name);
        setOrder({...order,[e.target.name]: e.target.value})
    }

    useEffect(() => {
        username = localStorage.getItem('username')
        async function fetchData(){
            const request = await axios({
                url: 'http://localhost:5040/customer/details',
                method: 'POST',
                data:{
                    username: username
                }
            });
            const response = await axios({
                url: 'http://localhost:5040/cart/show',
                method: 'POST',
                data:{
                    cusername: username
                }
            });
            console.log(request.data.response);
            console.log(response.data.response[0].items);
            items = response.data.response[0].items
            console.log("Items: ",items)
            setOrder({...order,username:username,order_id:Date.now().toString(),items: items})
            return request;
        }
        fetchData();
    },[]);

    const submitData = async () =>{
        console.log(order)
        const response = await axios({
            url: 'http://localhost:5040/order/store',
            method: 'POST',
            data:{
                id: order.order_id,
                items: order.items,
                fname: order.fname,
                lname: order.lname,
                username: order.username,
                email: order.email,
                address: order.address,
                city: order.city,
                zipcode: order.zipcode,
                phone: order.phone
            }
        });
        console.log(response)
        const isCartEmpty = await axios({
            url: 'http://localhost:5040/cart/empty',
            method: 'POST',
            data:{
                cusername: username
            }
        })
        console.log(isCartEmpty)
        return <Redirect to="/" />
    }

    return(
        <div>
            <div className="order__box">
                <div className="title__box">
                    <h1 className="title">Order</h1>
                </div>
                <div className="order__details">
                    <input onChange={(e) => onChange(e)} value={fname} type="text" name="fname" placeholder="First Name"></input>
                </div>
                <div className="order__details">
                    <input onChange={(e) => onChange(e)} value={lname} type="text" name="lname" placeholder="Last Name"></input>
                </div>
                <div class="order__details">
                    <input onChange={(e) => onChange(e)} value={email} type="text" name="email" placeholder="Email"></input>
                </div>
                <div class="order__details">
                    <input onChange={(e) => onChange(e)} value={address} type="text" name="address" placeholder="Address"></input>
                </div>
                <div class="order__details">
                    <input onChange={(e) => onChange(e)} value={city} type="text" name="city" placeholder="City"></input>
                </div>
                <div class="order__details">
                    <input onChange={(e) => onChange(e)} value={zipcode} type="text" name="zipcode" placeholder="Zipcode"></input>
                </div>
                <div class="order__details">
                    <input onChange={(e) => onChange(e)} value={phone} type="text" name="phone" placeholder="Phone"></input>
                </div>
                <div className="order__details">
                    <h3>Cost: </h3>
                </div>
                <div>
                    <button onClick={()=> submitData()}>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Order