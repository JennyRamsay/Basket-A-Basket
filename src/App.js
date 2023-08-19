import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductList from "./containers/ProductList";
import NavBar from "./components/NavBar";
import Basket from "./containers/UserBasket";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import {useState } from "react";


function App() {
  const [productList, setProductList] = useState(list)
  const [basket, setBasket] = useState([])
 
  const handleAddToBasket = (event) => {
    const chosenItem = productList.find((item)=> event.target.value == item.id)
    const newBasket = [... basket, chosenItem]
    setBasket(newBasket)
  };

  const handleDelFromBasket = () => {
    setBasket([])
  };

  const handleDelOneFromBasket = (event) => {
    const basketMinusOne = basket.filter((item,itemIndex) => itemIndex != event.target.value)
    setBasket(basketMinusOne)
  };



  return (
    <AppMain>
        <Headline>Welcome to Basket-A-Basket.</Headline>
        <Headline2>Commence Buying Now.</Headline2>
      <Router> 
        <NavBar/>  
        <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList handleAddToBasket={handleAddToBasket} productList={productList} />} />
          <Route path="/basket" element={<Basket basket={basket} handleDelFromBasket={handleDelFromBasket} handleDelOneFromBasket={handleDelOneFromBasket}/>} />
        </Routes>      
      </Router>
    </AppMain>
  );
};


export default App;

const AppMain = styled.div`
background: rgb(20, 108, 148);
margin: 10%;
margin-top: 0%;
padding: 5%;
padding-bottom: 25%;
color: black;
`

const Headline = styled.h2`
color: rgb(134, 150, 254);
`
const Headline2 = styled.h3`
color: rgb(134, 150, 254);
`

const list = [
  {
    title: "Red Basket",
    price: 5,
    desc: "Red",
    id: 1
  },
  {
    title: "Blue Basket",
    price: 10,
    desc: "Blue",
    id: 2
  },
  {
    title: "Yellow Basket",
    price: 20,
    desc: "Yellow",
    id: 3
  },
  {
    title: "Mauve Basket",
    price: 50,
    desc: "Mauve",
    id: 4
  },
]

