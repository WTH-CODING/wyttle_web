import React from 'react'
import ProductOnsale from  './Product_onsale'

const Onsale_section = () => {
    return (
        <>
        <div className="row pt-5 pb-5" style={{background: "rgba(193, 200, 228, 0.3)"}}>
            <div className="row" style={{height: "2.65rem"}}>
                <p style={{marginTop: "1.4rem",marginLeft: "3.5rem", fontSize: "2.5rem", fontWeight: "700", color: "#818181"}}>On Sale</p>
            </div>
            <div className="row" style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "baseline"}}>
                <div className="col-md-3 mt-sm-5">
                <ProductOnsale / >
                </div>
                <div className="col-md-3 mt-5">
                <ProductOnsale / >
                </div>
                <div className="col-md-3 mt-5">
                <ProductOnsale / >
                </div>
                <div className="col-md-3 mt-5">
                <ProductOnsale / >
                </div>
            </div>
        </div>
        </>
    )
}

export default Onsale_section
