import React, { useEffect, useState } from "react";

function Cardlist({ cart, setCart }) {
  const [Card, setCard] = useState();

  useEffect(() => {
    setCard(cart);
  }, [Card]);

  const removeItem = (selectedItem) => {
    console.log(selectedItem, "selected item");
    const filteredItems = cart.filter((each) => each.id !== selectedItem.id);
    setCart(filteredItems);
  }

  const increaseQuantity = (selectedItem) => {

    const changes = cart.map((item) => {
      return item.id === selectedItem.id ? { ...item, quantity: item.quantity + 1, price: item.price + item.price }
        : item
    });
    setCart(changes);
  

  }
  const DecressQuantity = (selectedItem) => {

    const changes = cart.map((item) => {
      return item.id === selectedItem.id ? { ...item, quantity: item.quantity - 1, price: item.price + item.price }
        : item
    });
    setCart(changes);
  

  }


  return (
    <div>
      {cart.length > 0 ? cart.map((cartItem, cartIndex) => {
        return (
          <>
            <div key={cartIndex} style={{display:'flex', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            
              <img src={cartItem.image} width={100} />
             <div style={{display:'flex',justifyContent:'space-between',alignContent:'space-between'}}>
             <span>{cartItem.title}</span>
              <button style={{height:"25px"}}
                onClick={() => {
                  DecressQuantity(cartItem)

                }}>-</button>
              <span>{cartItem.quantity}</span>
              <button style={{height:"25px"}}
                onClick={() => increaseQuantity(cartItem)}
              >
                +
              </button>
              {cartItem.price}

              <button style={{height:'25px'}}
              onClick={() => removeItem(cartItem)} >
                removeData
              </button>
             </div>
            </div>
            
          </>
        );
      }) : <div>No items in CART...!!!!</div>}
<p>
              Total Rs.  {cart
                .map((item) => item.price * item.quantity)
                .reduce((total, value) => total + value, 0)}
            </p>
    </div>
  );
}

export default Cardlist;
