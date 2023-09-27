import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const EditPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    price: "",
  });
  const [isLoading,setIsLoading] = useState(false)
  console.log(product);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/products/${id}`
      );
      setProduct({
        name: response.data.name,
        price: response.data.price,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/products/${id}`, product);
      toast.success("Update a product successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <form onSubmit={updateProduct}>
        <div className="space-y-2">
          <div>
            <label>Name</label>
            <input
              type="text"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400"
              placeholder="Enter Price"
            />
          </div>
          
          <div>
            {!isLoading && (
              <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">
                Update
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default EditPage;
