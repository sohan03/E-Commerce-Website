// import React, { useState } from 'react';
// import './AddProduct.css';
// import uploadarea from '../../assets/upload_area.svg';

// const AddProduct = () => {
//   const [image, setImage] = useState(null);
//   const [productDetails, setProductDetails] = useState({
//     name: "",
//     image: "",
//     category: "women",
//     new_price: "",
//     old_price: "",
//   });

//   const imageHandler = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const changeHandler = (e) => {
//     setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//   };

//   const Add_Product = async () => {
//     console.log('productDetails:', productDetails);
//     let responseData;
//     let product = productDetails;
//     let formData = new FormData();
//     formData.append('product', image);

//     try {
//       const uploadResponse = await fetch('http://localhost:4000/upload', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//         },
//         body: formData,
//       });

//       responseData = await uploadResponse.json();

//       if (responseData.success) {
//         product.image = responseData.image_url;
//         console.log('Product:', product);

//         const addProductResponse = await fetch('http://localhost:4000/upload', {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(product),
//         });

//         const addProductData = await addProductResponse.json();

//         if (addProductData.success) {
//           alert("Product Added");
//         } else {
//           alert("Failed to add product");
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="add-product">
//       <div className="addproduct-itemfield">
//         <p>Product Title</p>
//         <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder='Type here' />
//       </div>
//       <div className="addproduct-price">
//         <div className="addproduct-itemfield">
//           <p>Price</p>
//           <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
//         </div>
//         <div className="addproduct-itemfield">
//           <p>Offer Price</p>
//           <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
//         </div>
//       </div>
//       <div className="addproduct-itemfield">
//         <p>Product Category</p>
//         <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
//           <option value="women">Women</option>
//           <option value="men">Men</option>
//           <option value="kid">Kid</option>
//         </select>
//       </div>
//       <div className="addproduct-itemfield">
//         <label htmlFor="file-input">
//           <img src={image ? URL.createObjectURL(image) : uploadarea} className="addproduct-thumbnail-img" alt="" />
//         </label>
//         <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
//       </div>
//       <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
//     </div>
//   );
// };

// export default AddProduct;





import React, { useState } from 'react'
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg'
 
const AddProduct = () => {
 
    const [image,setImage] = useState(false);
    const[productDeatils, setProductDetails] = useState({
            name:"",
            image:"",
            category:"women",
            new_price:"",
            old_price:"",    
    })
 
 
    const imageHandler =(e) => {
            setImage(e.target.files[0]);
    }
 
    const changeHandler = (e) =>{
        setProductDetails({...productDeatils,[e.target.name]:e.target.value})
    }
    const Add_product = async() => {
            console.log(productDeatils);
            let responseData;
            let product = productDeatils;
 
            let formData = new FormData();
            formData.append('product', image);
            await fetch('https://e-commerce-website-e5ns.onrender.com/upload',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                },
                body:formData,
            }).then((resp) =>resp.json()).then((data)=>{responseData=data});
            if(responseData.success){
                product.image = responseData.image_url;
                console.log(product);
                await fetch('https://e-commerce-website-e5ns.onrender.com/addproduct',{
                    method:'POST',
                    headers:{
                        Accept:'application/json',
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(product),
                }).then((resp)=>resp.json()).then((data)=>{
                    data.success?alert("Product Added"):alert("Fail ed")
                })
 
            }
    }
 
 
 
  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={productDeatils.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDeatils.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type Here' />
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input value={productDeatils.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type Here' />
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDeatils.category} onChange={changeHandler} name="category" className='addproduct-selector'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="Kids">Kids</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} className='add-product-thumbnail' alt="" />
            </label>
            <input  onChange={imageHandler} type="file" name='image' id='file-input' hidden />
        </div>
        <button onClick={()=>{Add_product()}}className='addproduct-btn'>Add</button>
    </div>
  )
}
 
export default AddProduct
