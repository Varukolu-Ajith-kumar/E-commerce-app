import { Button, Card, CardActions, CardContent, Dialog, DialogTitle, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

function Productlist({ item, addToCart, search }) {
  console.log("search", search);
  const [open, setOpen] = useState(false); // State to control the dialog open/close

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* The Dialog component */}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        {/* Your dialog content */}
        {/* Replace the following code with your dialog content */}
        {/* <List sx={{ pt: 0 }}>
          ... Dialog content ...
        </List> */}
      </Dialog>

      {/* The rest of your product list */}
      <Grid container spacing={2}>
        {item.filter(ele => search ? ele.title.toUpperCase().includes(search.toUpperCase()) : ele).map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minWidth: 275 }} >
              <CardContent>
                <img src={item.image} style={{ width: "100%", maxWidth: "500px", maxHeight: "400px" }}onClick={() => setOpen(true)} />
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  {item.title}
                </Typography>
                <Typography variant="h6" component="div">
                  {item.price} $
                </Typography>
              </CardContent>
              <CardActions>
                <button onClick={() => addToCart(item)}>+AddToCard</button>
                {/* To open the dialog, set the open state to true */}
                {/* <Button onClick={() => setOpen(true)}>Open Dialog</Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Productlist;
