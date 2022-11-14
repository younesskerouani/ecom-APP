import "./newProduct.css";
import { useState } from "react";

export default function NewProduct() {
  const [file, setFile] = useState(null);

  return (
    <div className="newProduct">
      
      <form className="addProductForm">
      <h1 className="addProductTitle">New Product</h1>
        <div className="addProductItem">
          <label>Image</label>
       
          {file &&
           <img className="writeImg" src={URL.createObjectURL(file)} alt=""/> }

          <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus"></i>
          </label>
          
          <input id="fileInput" 
          type="file" 
          style={{ display: "none" }} 
          onChange={(e)=>setFile(e.target.files[0])} />

        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="enter product name" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="stock quantity" />
        </div>
      
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> 
      
          <div className="addProductItem">
            <label>Category</label>
            <select name="category" id="category">
              <option value="home">home</option>
              <option value="home">electrics</option>
            </select>
           </div>
           
            <div className="addProductItem">
             <label className="descLabel">Description</label>
              <textarea
                className="writeInput writeText"
                placeholder="Enter Product description..."
                type="text"
              />
            </div>

          
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
