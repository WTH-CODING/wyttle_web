import React from 'react'
import CatImg from './Categories_img'

function CategoriesSection() {
    return (
        <>
        <div className="row mt-3">
            <p style={{fontSize: "2.5rem", fontWeight: "700", color: "#818181",marginLeft: "3.5rem" }}>Categories</p>
        </div>
        <div className="row mt-5 mb-5">
            <div className="col-md-2 text-center mr-3 mt-3 col-sm-6 col-xs-6">
            <CatImg />
            </div>
            <div className="col-md-2 text-center mr-3 mt-3 col-sm-6 col-xs-6">
            <CatImg />
            </div>
            <div className="col-md-2 text-center mr-3 mt-3 col-sm-6 col-xs-6">
            <CatImg />
            </div>
            <div className="col-md-2 text-center mr-3 mt-3 col-sm-6 col-xs-6">
            <CatImg />
            </div>
            <div className="col-md-2 text-center mr-3 mt-3 col-sm-6 col-xs-6">
            <CatImg />
            </div>
            <div className="col-md-2 text-center mr-3 mt-3 col-sm-6 col-xs-6">
            <CatImg />
            </div>
              
        </div>
        </>
    )
}

export default CategoriesSection
