import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const CreatePage = () => {
  const [name,setName] = useState(null)
  const [price,setPrice] = useState(null)
  const [loading,setisLoading] = useState(false)
  const navigate = useNavigate();
  console.log(name)

  const postData = async (e) => {
    e.preventDefault();
    if(name === "" && price === ""){
        alert("The body shouldn't empty")
        return;
    }
    try{
        setisLoading(true);
        const response = await axios.post("http://localhost:3000/api/products",{name:name,price:price});
        toast.success(`Data is posted Succesfully`)
        setisLoading(false);       
        navigate("/")
    }
    catch(error){
        toast.error(error.message)
        console.log(error)
    }
  }
  return (
    <div style={{ display: "grid", placeItems: "center", marginTop: "200px" }}>
      <h1 style={{ marginBottom: "20px", fontSize: "40px" }}>
        Create a Product
      </h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <TextField value={name} onChange={(e)=>setName(e.target.value)} id="name" label="Name" variant="outlined" />
        <TextField value={price} onChange={(e)=>setPrice(e.target.value)} id="price" label="Price" variant="outlined" />
        <Button onClick={postData} variant="contained" href="#contained-buttons" style={{width:"100px",margin:"0 auto"}}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreatePage;
