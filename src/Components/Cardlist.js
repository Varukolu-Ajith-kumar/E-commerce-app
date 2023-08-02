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
    console.log(changes, "changes")

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
            <div key={cartIndex}>
              <img src={cartItem.image} width={30} style={{ display: "flex" }} />
              <span>{cartItem.title}</span>
              <button
                onClick={() => {
                  DecressQuantity(cartItem)

                }}>-</button>
              <span>{cartItem.quantity}</span>
              <button
                onClick={() => increaseQuantity(cartItem)}
              >
                +
              </button>
              {cartItem.price}

              <button onClick={() => removeItem(cartItem)} >
                removeData
              </button>
            </div>
            <p>
              Total Rs.  {cart
                .map((item) => item.price * item.quantity)
                .reduce((total, value) => total + value, 0)}
            </p>
          </>
        );
      }) : <div>No items in CART...!!!!</div>}

    </div>
  );
}

export default Cardlist;
