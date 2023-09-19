// import { useState } from 'react';
// import Cards from 'react-credit-cards-2';
// import 'react-credit-cards-2/dist/es/styles-compiled.css';
// import '../index.css'
// import Button from 'react-bootstrap/Button';

// const PaymentForm = () => {
//   const [state, setState] = useState({
//     number: '',
//     expiry: '',
//     cvc: '',
//     name: '',
//     focus: '',
//   });

//   const handleInputChange = (evt) => {
//     const { name, value } = evt.target;
    
//     setState((prev) => ({ ...prev, [name]: value }));
//   }

//   const handleInputFocus = (evt) => {
//     setState((prev) => ({ ...prev, focus: evt.target.name }));
//   }

//   return (
//       <>
//       <p className='text-center fw-bold p-3  fst-italic'>we are making the things easier </p>
//       <h2 className='text-center p-3 fw-bold'>Pay With Credit Card</h2>
//       <div className='w-100 d-flex justify-content-center'>
//     <div className='container p-5 shadow-lg border d-flex gap-2 m-4 PaymentCard w-75 '>
//       <div className='w-50 PaymentCard'>
//       <Cards 
//         number={state.number}
//         expiry={state.expiry}
//         cvc={state.cvc}
//         name={state.name}
//         focused={state.focus}
//       />
//       </div>
//       <form className='w-25 d-flex flex-column gap-3 '>
//         <input
//           type="number"
//           name="number"
//           placeholder="Card Number"
//           value={state.number}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//         />
//                 <input
//           type="text"
//           name="name"
//           placeholder="Card Holder Name"
//           value={state.name}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//         />
//         <input
//           type="text"
//           name="expiry"
//           placeholder="Expiry Date"
//           value={state.expiry}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//         />
//         <input
//           type="text"
//           name="cvc"
//           placeholder="CVC"
//           value={state.cvc}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//         />
//       <Button variant="danger">Submit</Button>
//       </form>
//     </div>
//     </div>
//     </>
//   );
// }

// export default PaymentForm;


import React, { useEffect, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import '../index.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
    paymentOption: 'creditCard', // Default to credit card option
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handlePaymentOptionChange = (evt) => {
    setState((prev) => ({ ...prev, paymentOption: evt.target.value }));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <p className='text-center fw-bold p-3 fst-italic'>we are making things easier</p>
      <h2 className='text-center p-3 fw-bold'>Select Payment Method</h2>
      <div className='p-3 fs-4 fw-bold'>
              <label>
                <input
                  type='radio'
                  name='paymentOption'
                  value='creditCard'
                  checked={state.paymentOption === 'creditCard'}
                  onChange={handlePaymentOptionChange}
                />
                Pay with Credit Card
              </label>
            </div>
      <div className='w-100 d-flex justify-content-center'>

        <div className='container p-5 shadow-lg border d-flex gap-2 m-4 PaymentCard w-75'>
          <div className='w-50 PaymentCard '>
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
            />
          </div>
          <Form className='w-25 d-flex flex-column gap-3 '>
            <input
              type='number'
              name='number'
              placeholder='Card Number'
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type='text'
              name='name'
              placeholder='Card Holder Name'
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type='text'
              name='expiry'
              placeholder='Expiry Date'
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type='text'
              name='cvc'
              placeholder='CVC'
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />

            {/* Payment Options - Radio Buttons */}

            <div>

            </div>

            <Button variant='danger'>Confirm</Button>
          </Form>
        </div>
      </div>
      <label className='p-3 fs-4 fw-bold w-50'>
                <input
                  type='radio'
                  name='paymentOption'
                  value='payOnDelivery'
                  checked={state.paymentOption === 'payOnDelivery'}
                  onChange={handlePaymentOptionChange}
                />
                Pay on Delivery
      </label>
      <div className='w-100 d-flex justify-content-center'>
      <div className='d-flex flex-column w-50 align-self-center border shadow-lg gap-3 mb-5 p-3'>
        <p className='fw-bold fst-italic'>provide more details </p>
        <input
              type='text'
              name='cvc'
              placeholder='ENTER YOUR NAME'
              className='w-50 d-flex align-self-center'
              // value={state}
              // onChange={handleInputChange}
              // onFocus={handleInputFocus}
            />
      <input
              type='text'
              name='cvc'
              placeholder='ENTER YOUR PHONE NUMBER'
              className='w-50 d-flex align-self-center'
              // value={state}
              // onChange={handleInputChange}
              // onFocus={handleInputFocus}
            />
      <input
              type='text'
              name='cvc'
              placeholder='ENTER YOUR ADDRESS'
              className='w-50 d-flex align-self-center '
              // value={state}
              // onChange={handleInputChange}
              // onFocus={handleInputFocus}
            />
            <div className='w-100 d-flex justify-content-center'>
            <Button variant='danger' className='text-center fw-bold'>Submit</Button>
            </div>
      </div>
      </div>
    </>
  );
};

export default PaymentForm;
