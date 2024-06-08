import { useState, useEffect } from "react";


function CartItems({handleAddProduct, handleRemoveProduct, fetchProductById, item_id, quantity }){
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetchProductById(item_id).then((item_data) => {
            setItem(item_data);
            setIsLoading(false);
        });
    }, [])

    if(isLoading){
        return <div className="items-info">Loading...</div>
    }

    const [ item_name, item_price, item_quantity, image_url ] = [item.name, item.price, quantity, item.images[0].url ];

    return (
        <div className="items-info">
            <div className="product-img">
                <img className='cart-items-image' src={image_url} alt={item_name} />
            </div>
            <div className="title text-black">{item.name}</div>
            <div className="add-minus-quantity">
                <i className="fas fa-minus minus" onClick={() => handleRemoveProduct(item_id)}></i>
                <input type="text" placeholder={item_quantity} disabled />
                <i className="fas fa-plus add" onClick={() => handleAddProduct(item_id, 1)}></i>
            </div>
            <div className="price">{item_quantity} * ₹{item_price}</div>
        </div>
    )
}

export default CartItems