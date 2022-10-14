import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "./app/Counterslice";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const App = () => {
  const { items } = useSelector((state) => state.itemSlice);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(false);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      {selectedProduct && (
        <ProductModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
      <div
        style={{
          display: "flex",
          flexBasis: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {items.map((item) => (
          <ProductCard item={item} setSelectedProduct={setSelectedProduct} />
        ))}
      </div>
    </div>
  );
};

export default App;
