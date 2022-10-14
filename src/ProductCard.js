import React from "react";
import "./ProductCard.css";


const ProductCard = ({ item, setSelectedProduct }) => {
  return (
    <div className="container" style={{ display: "inlineFlex" }}
    onClick={()=>setSelectedProduct(item)}
    >
        
      
      <div className="cardHeader">
        <img
          src={item.image}
          alt=""
          style={{
            height: "15vmax",
            objectFit: "contain",
            width: "10vmax",
            marginTop: "5px",
            alignSelf: "center",
          }}
        />
        <div>{item.title}</div>
            <div>
            <span>
                <b>Price :</b>
                {item.price}
            </span>
            <br />
            <span>
                <b>Rating :</b>
                {item.rating.rate}
            </span>
            </div>
      </div>
    </div>
  );
};

export default ProductCard;
