import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel';

function Productlist({ item, addToCart, search }) {
 
  const [open, setOpen] = useState(false); // State to control the dialog open/close
  const [selectedItem, setSelectedItem] = useState({});
  console.log("search", selectedItem);
  const handleClose = () => {
    setOpen(false);
  };
{console.log(item);}

  return (
    <>
     
      <Dialog onClose={handleClose} open={open} sx={{borderRadius:'10px',boxShadow:'initial'}}>
      
        <DialogActions sx={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start'}}>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}} >

          <img src={selectedItem?.image} height="100px"></img>
          <span style={{marginLeft:'20px'}}>
            <ul >
              <li>
              Price: {selectedItem?.price}
              </li>
           <li>
           Count:{selectedItem?.rating?.count}
           </li>
           <li>
           rate:{selectedItem?.rating?.rate}
           </li>
            </ul>
         
         
        
          </span>
          </div>

        </DialogActions>
        <DialogTitle>{selectedItem?.title}</DialogTitle>
        <DialogContent>
          {selectedItem?.description}
        </DialogContent>
      </Dialog>
      <Grid container spacing={2}>
        {item.filter(ele => search ? ele.title.toUpperCase().includes(search.toUpperCase()) : ele).map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minWidth: 275 }} >
              <CardContent>
                <img src={item.image} style={{ width: "100%", maxWidth: "300px", maxHeight: "300px" }} onClick={() => {
                  setOpen(true)
                  setSelectedItem(item)
                }} />
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  {item.title}
                </Typography>
                <Typography variant="h6" component="div">
                  {item.price} $
                </Typography>
              </CardContent>
              <CardActions>
                <button onClick={() => addToCart(item)}>+AddToCard</button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Productlist;
