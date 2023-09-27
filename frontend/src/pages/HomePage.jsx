import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/products/");
      console.log(response.data);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
        {loading ? (
          "Loading..."
        ) : (
          <>
            {products.length > 0 ? (
              <>
                {products.map((product, index) => {
                  return (<Product key = {index} product = {product} getProducts={getProducts}/>)
                })}
              </>
            ) : (
              <div>There are not prdoucts</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
