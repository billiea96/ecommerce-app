import React from "react";

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const search = props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    // const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const qty = params.get('qty');
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>
                Add to cart : Product ID : {productId} Qty : {qty}
            </p>
        </div>
    );
}