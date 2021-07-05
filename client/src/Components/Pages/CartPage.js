import React from 'react'
import CartItemCard from '../Cart/CartItemCard'

function CartPage() {
    return (
        <>
        <div className="row mt-3">
        <h1 style={{fontFamily: "Poppins", fontSize: "2.5rem", fontWeight:"700", marginLeft: "1.5rem", color: "#6a6a6a"}}>Shopping Cart</h1>
        </div>
        <div className="row">
            <div className="col-md-6 p-5">
            <div className="row mt-3">
                <div className="col-md-6">
                    <p style={{fontFamily: "poppins", fontWeight: "400" , fontSize: "1.3rem"}}>Product</p>
                </div>
                <div className="col-md-2">
                    <p style={{fontFamily: "poppins", fontWeight: "400" , fontSize: "1.3rem"}}>Price</p>
                </div>
                <div className="col-md-2">
                    <p style={{fontFamily: "poppins", fontWeight: "400" , fontSize: "1.3rem"}}>Quantity</p>
                </div>
                <div className="col-md-2">
                    <p style={{fontFamily: "poppins", fontWeight: "400" , fontSize: "1.3rem"}}>Subtotal</p>
                </div>
            <hr style={{height: "3px"}}></hr>
            </div>
            <CartItemCard />
            <CartItemCard />
            <CartItemCard />
            <div className="row">
                <div className="col-md-10">
                    <hr></hr>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-5">
                    <button className="btn btn-primary" style={{width: "100%",border: "1px solid #879300", background: "#ffffff",color: "black", borderRadius: "0px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>Continue Shopping</button>
                </div>
            </div>
            </div>
{/* VERTICAL RULE */}
            <div className="col-md-1" style={{textAlign: "-webkit-center"}} >
                <div style={{backgroundColor: "black",width:"1px", height: "100%"}}>
                </div>
            </div>

            <div className="col-md-4 mt-5">
            <div className="row mt-3">
                <div className="col-md-6">
                    <p style={{fontFamily: "poppins", fontWeight: "400" , fontSize: "1.5rem"}}>Cart Total</p>
                </div>
            <hr style={{height: "3px"}}></hr>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <p style={{color:"#555555"}}>Subtotal</p>
                </div>
                <div className="col-md-6">
                    <p style={{margin: "0px", fontFamily: "Poppins", color: "#555555", fontWeight: "400", fontSize: "1.2rem"}}>Rs. 16,830</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <hr></hr>
                </div>
            </div>
            <div className="row">
            <div className="col-md-6">
                <span style={{color:"#555555"}}>Shipping</span>
            </div>
            <div className="col-md-6">
                <p style={{color:"#555555"}}>
                    Shipping to : Africa
                </p>
                <p style={{color:"#555555"}}>
                    Shipping Charges : 500
                </p>
            </div>
            </div>
            <div className="row mt-5">
            <div className="col-md-6">
                <span style={{color:"#555555"}}>Total</span>
            </div>
            <div className="col-md-6">
                <p style={{margin: "0px", fontFamily: "Poppins", color: "#555555", fontWeight: "500", fontSize: "1.5rem"}}>
                    Rs. 16,830
                </p>
            </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <hr></hr>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-9">
                    <button className="btn btn-primary" style={{width: "100%",border: "1px solid #879300", background: "#77a000",color: "white", borderRadius: "0px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>Proceed to Checkout</button>
                </div>
            </div>
            </div>
            
        </div>
        </>
    )
}

export default CartPage
