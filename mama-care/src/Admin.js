import React,{useState} from 'react'
import axois from 'axios'
const storeProduct = async (pid, pname, price) =>{
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({pid, pname, price})
        console.log(`Body: ${body}`)
        
        const response = await axois.post("http://localhost:5040/product/store",body,config)

        console.log(response.data.msg)
        return response.data.msg
    }catch(error){
       console.log(error)
       return error;
    }
} 

const Admin = () => {

    const [data, setData] = useState({
        pid: '',
        pname: '',
        price: 0,
        quantity: 0,
        ProductImage: '',
        description: '',
    })

    let msg = "";

    let {pid, pname, price, quantity, ProductImage, description} = data;

    const onChange = e =>{
        console.log(e.target.name);
        setData({...data,[e.target.name]: e.target.value})
    }

    const submitData = () =>{
        msg += storeProduct(pid,pname,price)
        console.log(`Msg: ${msg}`)
        document.getElementById("message").innerHTML = msg; 
        console.log(data);
    }

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          setData({...data,
            ProductImage: URL.createObjectURL(img)
          });
          console.log(ProductImage)
        }
    };

    return (
        <div className="products__store">
            <h4>Hello, Admin</h4>
            <div className="product__store">
                <div className="pinput">
                    <input onChange={(e) => onChange(e)} value={pid} type="text" id="pid" name="pid" placeholder="Product ID" required/>
                </div>
                <div className="pinput">
                    <input onChange={(e) => onChange(e)} value={pname} type="text" id="pname" name="pname" placeholder="Product Name" required/>
                </div>
                <div className="pinput">
                    <input onChange={(e) => onChange(e)} value={price} type="number" id="price" name="price" placeholder="Price" required/>
                </div>
                <div className="pinput">
                    <input onChange={(e) => onChange(e)} value={quantity} type="number" id="quantity" name="quantity" placeholder="Quantity" required/>
                </div>
                <div className="pinput">
                    <input onChange={(e) => onChange(e)} value={description} type="text" id="description" name="description" placeholder="Description" required/>
                </div>
                <div>
                    <img style={{width: "300px" }} src={ProductImage} />
                    <h1>Select Image</h1>
                    <input type="file" name="myImage"  onChange={onImageChange} />
                </div>
                <button onClick={()=>submitData()} id='upload'>Upload</button>
            </div>
            <div>
                <h4 id="message"> </h4>
            </div>
        </div> 
    )
}

export default Admin

  

