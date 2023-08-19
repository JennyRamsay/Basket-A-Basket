const BasketItem = ({item,handleDelOneFromBasket, index}) => {

    return(
        <li>
        <p>{item.title}</p>
        <p>${item.price}</p>
        <p>{item.desc}</p>
        <button value={index} onClick={handleDelOneFromBasket}>Delete from basket</button>
        </li>
    )
}

export default BasketItem