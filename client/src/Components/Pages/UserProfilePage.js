import React from 'react'
import p1 from '../../Assets/p1.jpg'
import FeaturedFeedbackCard from '../FeaturedFeedbackCard'
import CartItemCard from '../Cart/CartItemCardReadOnly'
import TotalAmountCard from '../Cart/TotalAmountCard'
import { Link } from 'react-router-dom'

const UserProfilePage = () => {
    return (
        <>
            <div className="row m-5">
                <div className="col-md-4 text-center">
                <h1 style={{fontFamily: "Poppins", fontWeight: "700", fontSize: "3.2rem",color: "#6a6a6a"}}>
                    Profile
                </h1>
                </div>
            </div>
            <div className="row m-5">
            <div className="col-md-1"></div>
                <div className="col-md-3 text-center ">
                    <img alt=".." src={p1} style={{maxWidth: "50%", borderRadius: "50%"}} />
                </div>
                <div className="col-md-4 text-center">
                    <h1>Current points</h1>
                    <h1 style={{fontWeight: "700", fontFamily: "Poppins", fontSize: "3.2rem"}}>98</h1>
                </div>
                <div className="col-md-4 text-center">
                <h1><i className="fas fa-arrow-circle-up"></i> Upvotes</h1>
                <h1 style={{fontWeight: "700", fontFamily: "Poppins", fontSize: "3.2rem"}}>22</h1>
                </div>
            </div>
            <div className="row p-5">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-4"><p style={{color: "#454545",fontFamily: "Poppins",fontWeight: "700", fontSize: "1.2rem"}}>Name :</p></div>
                        <div className="col-md-6"><p style={{color: "#454545",fontFamily: "Poppins",fontWeight: "500", fontSize: "1.2rem"}}>Baba Boi</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"><p style={{color: "#454545",fontFamily: "Poppins",fontWeight: "700", fontSize: "1.2rem"}}>Address 1 :</p></div>
                        <div className="col-md-6"><p style={{color: "#454545",fontFamily: "Poppins",fontWeight: "500", fontSize: "1.2rem"}}>69 Street Karachi, Pakistan, Pin: 696969</p></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"><p style={{color: "#454545",fontFamily: "Poppins",fontWeight: "700", fontSize: "1.2rem"}}>Address 2 :</p></div>
                        <div className="col-md-6"><p style={{color: "#454545",fontFamily: "Poppins",fontWeight: "500", fontSize: "1.2rem"}}>69 Street Karachi, Pakistan, Pin: 696969</p></div>
                    </div>
                </div>
                <div className="col-md-1" style={{textAlign: "-webkit-center"}}>
                   <div style={{width: "4px", background: "#5680e9", height:"100%", borderRadius: "50px"}}></div>
               </div>
               <div className="col-md-6">
                   <div className="row">
                       <h2 style={{fontSize: "2.4rem",fontFamily: "Poppins", fontWeight: "700", color: "#6a6a6a"}}>Your Top Feedback</h2>
                   </div>
                   <FeaturedFeedbackCard />
               </div>

            </div>
            <div className="row mt-5" style={{background: "#f5f5f5"}}>
                <div className="col-md-12">
                    <div className="row mt-5">
                    <h1 style={{fontFamily: "Poppins", fontSize: "2.5rem", fontWeight:"700", marginLeft: "1.5rem", color: "#6a6a6a"}}>Previous Orders</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-5 p-5">
                        <CartItemCard/>
                        <CartItemCard/>
                        <CartItemCard/>
                        </div>
                        <div className="col-md-1" style={{textAlign: "-webkit-center"}} >
                            <div style={{backgroundColor: "black",width:"1px", height: "90%"}}>
                        </div>
                        </div>
                        <div className="col-md-6 p-5">
                            <TotalAmountCard />
                            <div className="row mt-3">
                            <div className="col-md-9">
                    <button className="btn btn-primary" style={{border: "1px solid #879300", background: "#77a000",color: "white", borderRadius: "0px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", float: "right"}}>Leave a Feedback</button>
                </div>
                </div>
                            <div className="row mt-2">
                            <div className="col-md-9">
                                <Link to="/redeem">
                    <button className="btn btn-primary" style={{float: "right", border: "1px solid #879300", background: "#ea4c42",color: "white", borderRadius: "0px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>Avail Points</button>
                    </Link>
                </div>
                </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfilePage
