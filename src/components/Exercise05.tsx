import React, { useState } from "react";

export default function Exercise05() {
  const [product, setProduct] = useState({
    code: "SP001",
    name: "Cam da xanh",
    price: 20000,
    quantity: 10
  })

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {name, value} = event.target;
    setProduct(prev => ({
      ...prev,
      [name]: name === "price" || name === "quantity" ? Number(value) : value
    }))
  }

  const handleSumbit = () => {
    console.log(product);
  }

  return (    
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
      <div style={{backgroundColor: "white", padding: "24px", borderRadius: "8px", width: "320px", border: "1px solid #ddd",}}>
        <h2 style={{textAlign: "center", marginBottom: "20px",}}>
          Them moi san pham
        </h2>
        <label>Ma san pham</label>
        <input type="text" name="code" value={product.code} onChange={handleChangeInput} defaultValue="SP001" style={{width: "100%", marginBottom: "16px", padding: "8px", borderRadius: "6px", border: "1px solid #ccc",}}/>
        <label>Ten san pham</label>
        <input type="text" name="name" value={product.name} onChange={handleChangeInput} defaultValue="Cam da xanh" style={{width: "100%", marginBottom: "16px", padding: "8px", borderRadius: "6px", border: "1px solid #ccc",}}/>
        <label>Giá</label>
        <input type="number" name="price" value={product.price} onChange={handleChangeInput} defaultValue={20000} style={{width: "100%", marginBottom: "16px", padding: "8px", borderRadius: "6px", border: "1px solid #ccc",}}/>
        <label>So luong</label>
        <input type="number" name="quantity" value={product.quantity} onChange={handleChangeInput}  defaultValue={10} style={{width: "100%", marginBottom: "20px", padding: "8px", borderRadius: "6px", border: "1px solid #ccc",}}/>
        <button onClick={handleSumbit} style={{width: "105%", backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "6px", border: "none",}}>
          Dang ky
        </button>
      </div>
    </div>
  );
}
