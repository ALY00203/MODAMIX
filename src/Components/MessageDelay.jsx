// import React, { useEffect, useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

// const MessageDelay = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(true);
//     }, 5000); 

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <div className={`alert-container ${show ? 'show' : 'hide'}`}>
//       {show && (
//         <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
//           <Alert.Heading>25% off!</Alert.Heading>
//           <p>
//             Take advantage of our special offer and get 25% off on selected items.
//           </p>
//         </Alert>
//       )}

//       {!show && (
//         <Button onClick={() => setShow(true)}>Show Alert</Button>
//       )}
//     </div>
//   );
// };

// export default MessageDelay;
import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import AlertImg from '../vedios-images/fetting.jpg'
const AlertDelay = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`alert-container ${show ? 'show' : 'hide'} `}>
      {show && (
        <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible className='bg-dark rounded-5'>
          <div className="d-flex align-items-center">
            <img src={AlertImg} alt="Discount" className="p-3" style={{ width: '400px' }} />
            <div>
              <Alert.Heading className='text-center'>
                <strong className='display-2 text-white fw-bold '>25% off!</strong>
              </Alert.Heading>
              <p className='fw-bold text-white text-xxl-center'>
                Take advantage of our special offer and get 25% off on selected items.
              </p>
            </div>
          </div>
        </Alert>
      )}

      {!show && (
        <Button className='close' onClick={() => setShow(true)}>Show Alert</Button>
      )}
    </div>
  );
};

export default AlertDelay;
