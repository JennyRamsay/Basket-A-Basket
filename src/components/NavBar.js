import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components"

const NavBar = () => {

    return(
        <header>
            
            <FlexNavBar>
            <h3>Navigation Bar</h3>
                <ButtonStyleLinks key="home"><Link to="/">Home</Link></ButtonStyleLinks>
                <ButtonStyleLinks key="products"><Link to="/products">Our Baskets</Link></ButtonStyleLinks>
                <ButtonStyleLinks key="basket"><Link to="/basket">Your Basket</Link></ButtonStyleLinks>
            </FlexNavBar>
        </header>
    )
};

const FlexNavBar = styled.ul`
list-style: none;
margin: 5px;
display: flex;
justify-content: space-evenly;
flex-direction: column;
padding-left: 0;
`

const ButtonStyleLinks = styled.li`
background-color: rgb(134, 150, 254);;
padding: 1em;
margin: 5px;
width: 5em;
border-radius: 25%;
`
export default NavBar