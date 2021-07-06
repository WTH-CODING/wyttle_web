import React, {useEffect,useState} from "react";
import ProductOnsale from "./Product/Product_onsale";

const Onsale_section = () => {

  const[products,setProducts] = useState([])
  useEffect(()=>{
    getProducts();
  },[])
  const getProducts = () => {
    fetch('http://20.84.89.186/api/v1/product')
  .then(response => response.json())
  .then(data => setProducts(data));

  console.log("getProducts Function Called")
  }
  return (
    <>
      <div
        className="row pt-5 pb-5"
        style={{ background: "rgba(193, 200, 228, 0.3)" }}
      >
        <div className="row" style={{ height: "2.65rem" }}>
          <p
            style={{
              marginTop: "1.4rem",
              marginLeft: "3.5rem",
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#818181",
            }}
          >
            On Sale
          </p>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          {products&& products.map((product,i)=>{
            return(
            <div className="col-md-3 mt-sm-5">
              <ProductOnsale key={i} product={product} />
            </div>
            )
          })}
          
        </div>
      </div>
    </>
  );
};

export default Onsale_section;
