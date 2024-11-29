import React, {useState} from 'react';

export default function MyComponent2(){
    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState("")

    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleQuantityChange(e){
        setQuantity(e.target.value)
    }
    function handleCommentChange(e){
        setComment(e.target.value)
    }
    function handlePaymentChange(e){
        setPayment(e.target.value)
    }
    function handleShippingChange(e){
        setShipping(e.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name} </p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity} </p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter Delivery instructions'/>
            <p>Comment: {comment} </p>

            <select value={payment} onChange={handlePaymentChange} >
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" onChange={handleShippingChange} checked ={shipping === "Pick Up"} />
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" onChange={handleShippingChange} checked ={shipping === "Delivery"}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );


}