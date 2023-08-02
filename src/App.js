import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Cardlist from "./Components/Cardlist";
import Productlist from "./Components/Productlist";

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, []);

  const addToCart = (data) => {
    const found = cart.find((each)=>each.id===data.id);
    if(found){
     alert("already added to card");
    }
    else{

      setCart([...cart, { ...data, quantity: 1 }]);
    }

  };

  const handleShow = (value) => {
    setShow(value);
  };
const [search,setSearch]=useState()
  return (
    <div className="App">
      <Header count={cart.length} handleShow={handleShow} search={search} setSearch={setSearch} />
      {show ? <Cardlist cart={cart} setCart={setCart} /> : <Productlist item={product} addToCart={addToCart} search={search}/>}
      
    </div>
  );
}

export default App;
