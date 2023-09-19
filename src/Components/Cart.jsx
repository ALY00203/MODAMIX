// /* eslint-disable no-undef */
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deFromCart, handleRemoveItem, inToCart } from '../Slices/CartSlice';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// function Cart() {
//   const cart = useSelector((state) => state.cart.cart);
//   const dispatch = useDispatch ()
//   return (
//     <div className='container py-5'>
//     <h2 className='pb-3 mb-3 border-bottom text-center w-100 border shadow-lg '>Your Cart Items</h2>
//       {cart.map((item) => (
//         <div className='container'>
//         <div key={item.id} className='cart-item'>
// <div className='d-flex w-50'>
//   <div className='w-50'>
//             <img src={item.image} alt={item.title} style={{ maxWidth: '350px', maxHeight: '250px' }} />
//             <h2 className=' bb-1'>{item.title}</h2>
//   </div>
//   <div className='w-50'>
//   <p className='p-2  w-100 text-center fw-bold fs-4'>Quantity Needed</p>
//             <div className='d-flex justify-content-center align-items-center p-2  w-100'>
//             <button className='text-center' onClick={() => dispatch(inToCart(item))}>+</button>
//             <p className='fw-bold m-3 text-center  align-self-center fs-4'>{item.count}</p>
//             <button onClick={() => dispatch(deFromCart(item))}>-</button>
//             </div>
// </div>
//   </div>
// <div>
// <p className='fs-3 fst-italic'>{item.description}</p>

//     <Form.Select className='w-25 fw-bold border-0' aria-label="Default select example">
//       <option>Please Select Your Size</option>
//       <option value="1">Small</option>
//       <option value="2">Medium</option>
//       <option value="3">Large</option>
//     </Form.Select>
// </div>
// <p className='w-100 border text-center fs-2 fw-bold shadow-lg'>Price: ${item.price}</p>
// <div className='w-100 border  d-flex justify-content-end'>
//             <button className='text-center border bg-danger text-black-50 fw-bold' onClick={() => dispatch (handleRemoveItem(item))}>Remove</button>
//             </div>
//         </div>
//         </div>
//       ))}
//       {/* <div className='w-100 d-flex justify-content-center border d-grid gap-2'>
//       <Button className='checkout-button m-3 rounded-5 ' size="lg">Check Out</Button>
//       </div> */}
//     <div className="d-grid gap-2">
//       <Button className='fw-bold' variant="primary" size="lg">
//        CHECK OUT NOW 
//       </Button>
//     </div> 

//     </div>
//   );
// }

// export default Cart;
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deFromCart, handleRemoveItem, inToCart } from '../Slices/CartSlice';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FacebookLogo, InstagramLogo, PinterestLogo, SnapchatLogo} from "phosphor-react";
import { Link } from 'react-router-dom';

function calculateTotalPrice(cart) {
  return cart.reduce((total, item) => total + item.price * item.count, 0);
}

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const totalPrice = calculateTotalPrice(cart);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (cart.length === 0) {
    return (
      <div className='container text-center py-5'>
        <h2 className='pb-3 mb-3 border-bottom text-center w-100 border shadow-lg'>
          Your Cart Items
        </h2>
        <p className='fw-bold fs-3'>Hurry up, shop now!</p>
      </div>
    );
  }

  
  return (
    <div className='container py-5'>
      <h2 className='pb-3 mb-3 border-bottom text-center w-100 border shadow-lg '>Your Cart Items</h2>
      {cart.map((item) => (
        <div className='container'>
          <div key={item.id} className='cart-item'>
            <div className='d-flex w-50'>
              <div className='w-50'>
                <img src={item.image} alt={item.title} style={{ maxWidth: '350px', maxHeight: '250px' }} />
                <h2 className=' bb-1'>{item.title}</h2>
              </div>
              <div className='w-75'>
                <p className='p-2  w-100 text-center fw-bold fs-4'>Quantity Needed</p>
                <div className='d-flex justify-content-center align-items-center p-2  w-100'>
                  <button className='text-center' onClick={() => dispatch(inToCart(item))}>+</button>
                  <p className='fw-bold m-3 text-center  align-self-center fs-4'>{item.count}</p>
                  <button onClick={() => dispatch(deFromCart(item))}>-</button>
                </div>
               <h6 className='w-100  text-start fst-italic'>HAVE A COUPON ! GET DISCOUNT NOW </h6>  
               <input type='TEXT' /> <Button className='fst-italic'  variant="outline-warning btn-sm">SUBMIT</Button>
              
              </div>
            </div>
            <FacebookLogo size={32} />
            <InstagramLogo size={32} />
            <PinterestLogo size={32} />
            <SnapchatLogo size={32} />
            <div>
              <p className='fs-3 fst-italic'>{item.description}</p>

              <Form.Select className='w-25 fw-bold border-0' aria-label="Default select example">
                <option>Please Select Your Size</option>
                <option value="1">Small</option>
                <option value="2">Medium</option>
                <option value="3">Large</option>
              </Form.Select>
            </div>
            <p className='w-100 border text-center fs-2 fw-bold shadow-lg'>Price: ${item.price}</p>
            <div className='w-100 border  d-flex justify-content-end'>
              <button className='text-center border bg-danger text-black-50 fw-bold' onClick={() => dispatch(handleRemoveItem(item))}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      <div className="d-grid gap-2">
        <Button as={Link} to={'/Payment'} className='fw-bold' variant="primary" size="lg">
          CHECK OUT NOW
        </Button>
      </div>

      <p className='w-100 border text-center fs-2 fw-bold shadow-lg'>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
