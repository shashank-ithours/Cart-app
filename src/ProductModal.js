import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ProductModal = ({selectedProduct,setSelectedProduct }) => {
  return (
    <div>
      <Modal
        isOpen={selectedProduct}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{width:"12vmax"}}>
                <img src={selectedProduct.image} alt="" style={{height:'200px'}} />
            </div>
            <div  style={{width:"10vmax"}}> 
                <div>
                    <h5>{selectedProduct.title}</h5>
                    <p >{selectedProduct.description}</p>
                </div>
            </div>
        </div>
        <button onClick={()=>setSelectedProduct(null)} >close</button>
        
      </Modal>
    </div>
  );
};

export default ProductModal;
