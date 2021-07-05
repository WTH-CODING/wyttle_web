import React from 'react'
import ProductTopReviewCard from "./Product/ProductTopReviewCard";

const HomeHero = () => {
    return (
        <>
           <div className="row">
               <div className="col-md-1"></div>
               <div className="col-md-4" style={{alignSelf : "center"}}>
                    <h1 style={{fontSize: "3.5rem", fontWeight: "700"}}>
                    Finest products
                    </h1 >
                    <h1 style={{fontSize: "3.5rem", fontWeight: "700"}}>
                    for affordable
                    </h1>
                    <h1 style={{fontSize: "3.5rem", fontWeight: "700"}}>
                    prices
                    </h1>
                    <p style={{fontSize: "1.2rem", fontWeight: "400", color: "#6f6f6f"}}>
                    Leave a feedback for a chance to win exciting rewards
                    </p>
               </div>
               <div className="col-md-1" style={{textAlign: "-webkit-center"}}>
                   <div style={{width: "4px", background: "#5680e9", height:"90%",transform: "translateY(34px )" , borderRadius: "50px"}}></div>
               </div>
               <div className="col-md-6 mb-5">
                    <ProductTopReviewCard/>
                    <ProductTopReviewCard/>
            </div>
            </div> 
            
        </>
    )
}

export default HomeHero
