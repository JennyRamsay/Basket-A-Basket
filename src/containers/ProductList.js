import styled from "styled-components"
import ListItem from "../components/ListItem"


const ProductList = ({productList, handleAddToBasket}) => {

    const listOfProducts = productList.map((item)=><ListItem key={item.id} handleAddToBasket={handleAddToBasket} item={item}>{item.title}</ListItem>)

    return(
        <GridList>
            {listOfProducts}
        </GridList>
    )
}

const GridList = styled.ul`
list-style: none;
display: grid;
grid-template-columns: 35% 35% 35%;
padding: 5%;
border: 3px solid black;
`
export default ProductList