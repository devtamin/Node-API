import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { toast } from 'react-toastify';

const Product = ({ key, product,getProducts }) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      
    </Box>
  );
  const deleteProduct = async (id) => {
  
    try{
      await axios.delete(`http://localhost:3000/api/products/${id}`)
      toast.success("Product succesfully deleted")
      getProducts();
    }
    catch(error){
      toast.error(error.message)
    }
  }
  return (
    <div style={{display:"flex",flexDirection:"row",padding:"20px"}}>
      <div>
        <Card>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Phone Model
            </Typography>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2">
              {product.price}

            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <Link to={`/edit/${product._id}`}>Edit</Link>
            <button onClick={()=> deleteProduct(product._id)}>Delete</button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Product;
