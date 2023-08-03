import React, { useState } from 'react';
import Productlist from './Productlist';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function Header({ count, handleShow, search, setSearch }) {
  // const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search, "LLLLLLLLLJjjjjjjjjjjj")
    // setProduct(product.filter(item=>(item.title.includes(search))))
  }

  return (

    <div className='shopping-card' style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'blueviolet', fontSize: 25, color: 'wheat', padding: '20px' }}>

      <div onClick={() => handleShow(false)}>
        Product$

      </div>

      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <TextField
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search For Products"
        inputProps={{ 'aria-label': 'search for products' }}
        onChange={handleChange}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>



      <div onClick={() => handleShow(true)}>
        cart <sup>{count}</sup>


      </div>
    </div>
  );
}

export default Header;
