import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../../redux/slices/cartSlice";

function CartItems({ fetchProductById, item_id, quantity }) {
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchProductById(item_id).then((item_data) => {
            setItem(item_data);
            setIsLoading(false);
        }).catch((error) => {
            console.error("Failed to fetch product:", error);
            setIsLoading(false);
        });
    }, [item_id]);

    if (isLoading) {
        return <div className="items-info">Loading...</div>
    }

    if (!item) {
        return <div className="items-info">Failed to load product details.</div>
    }

    const { name, price, images } = item;
    const image_url = images && images[0] ? images[0].url : '';

    return (
        <div className="items-info">
            <div className="product-img">
                <img className='cart-items-image' src={image_url} alt={name} />
            </div>
            <div className="title text-black">{name}</div>
            <div className="add-minus-quantity">
                <i className="fas fa-minus minus" onClick={() => dispatch(removeProduct({ itemId: item_id }))}></i>
                <input type="text" placeholder={quantity} disabled />
                <i className="fas fa-plus add" onClick={() => dispatch(addProduct({ itemId: item_id, quantity: 1 }))}></i>
            </div>
            <div className="price">{quantity} * ₹{price}</div>
        </div>
    )
}

export default CartItems;