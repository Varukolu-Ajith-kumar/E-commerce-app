import React, { useState } from 'react';
import Productlist from './Productlist';
import { TextField } from '@mui/material';

function Header({ count, handleShow,search,setSearch }) {
  // const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value);
console.log(search,"LLLLLLLLLJjjjjjjjjjjj")
    // setProduct(product.filter(item=>(item.title.includes(search))))
  }

  return (
    
    <div className='shopping-card' style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'blueviolet', fontSize: 25, color: 'wheat', padding: '20px' }}>

      <div onClick={() => handleShow(false)}>
        Product$

      </div>
      <div>
    
          <TextField
          
          label="search" size="large"
          variant="outlined"
          fullWidth
          // color="red"
          InputLabelProps={{ style: { color: 'pink' } }}
          onChange={handleChange}
        />


      </div>
      <div onClick={() => handleShow(true)}>
        cart <sup>{count}</sup>


      </div>
    </div>
  );
}

export default Header;
