import React from 'react'
import DealsSlider from '../DealsSlider'

function PointRedeemPage() {
    return (
        <>
            <div className="row p-5">
                <div className="col-md-6">
                <h1 style={{color: "#6a6a6a"}}>Exciting Rewards for You</h1>
                <h4 style={{color: "#black", fontFamily: "Nunito"}}>Balance: 0 points</h4>
                </div>
                <div className="col-md-6">
                <button className="btn btn-primary" style={{float: "right"}}>
                    View Redeemed Rewards
                </button>
                </div>
            </div>
            <DealsSlider title="Wyttle" title2="Wyttle Deals"/>
            <DealsSlider title="Entertainment" title2="Entertainment Deals"/>
            <DealsSlider title="Explorer" title2="Explorer Deals"/>
            
            
        </>
    )
}

export default PointRedeemPage
