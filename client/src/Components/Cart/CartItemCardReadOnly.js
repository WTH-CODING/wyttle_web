import React from 'react'
import p1 from '../../Assets/p1.jpg'

function CartItemCard() {
    return (
        <div>
            <div className="row mt-2">
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-4" style={{alignSelf: "center"}}>
                        <img alt="p1" src={p1} style={{height: "100%" , width: "100%", borderRadius: "1.15rem"}} />
                    </div>
                    <div className="col-md-8" style={{alignSelf: "center"}}>
                    <p style={{margin: "0px", fontFamily: "Poppins", color: "#000000"}}>Product Title</p>
                    </div>
                </div>
                    
                </div>
                <div className="col-md-2" style={{alignSelf: "center"}}>
                    <p style={{margin: "0px", fontFamily: "Poppins", color: "#000000", fontWeight: "400", fontSize: "1.2rem"}}>₹ 100</p>
                </div>
                <div className="col-md-2" style={{alignSelf: "center"}}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            1
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-2" style={{alignSelf: "center",}}>
                    <p style={{margin: "0px", fontFamily: "Poppins", color: "#000000", fontWeight: "400", fontSize: "1.2rem"}}>₹ 100</p>
                </div>
            </div>
        </div>
    )
}

export default CartItemCard
