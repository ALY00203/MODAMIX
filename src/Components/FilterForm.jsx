import React from 'react'
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FilterForm() {
  return (
<>
<div className='border'>



<h5 className='fw-bold '>Search By Item </h5>
<div className='d-flex justify-content-center align-items-center'>
<input type='text' placeholder='  search here for whats in your mind' className='w-75 search-in mb-3 rounded-4 search-item' name='search' />
</div>



</div>



<div className='border'>
<h5 className='fw-bold  p-0'>Search By Price </h5>
<InputGroup.Text id="inputGroup-sizing-sm" className='bg-white border-0'>
  <input type='number'  className='w-5 search-in-2 mb-2 rounded-4  m-1' name='priceMin' placeholder='min Price is 1 euro' /> :
  <input type='number'  className='w-5 search-in-2 mb-2 rounded-4 m-1' name='priceMax' placeholder='max Price is 60 euro'/>
</InputGroup.Text>
</div>
</>


)
}

export default FilterForm