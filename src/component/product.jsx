import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./product.module.css";
import { Carousel } from "@trendyol-js/react-carousel";

const Product = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth <= 768;
      setIsMobileView(isMobile);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        if (res.status === 200) {
          setProducts(res?.data);
        } else {
          setProducts([]);
        }
      } catch (err) {
        setProducts([]);
      }
    }
    async function getCategories() {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        console.log("categories", res);
        if (res.status === 200) {
          setCategories(res?.data);
        } else {
          setCategories([]);
        }
      } catch (err) {
        setCategories([]);
      }
    }
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <div className={classes.maincontainer}>
        <div className={classes.productCon}>
          <span className={classes.product}>New Products</span>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.categories}>
          {categories?.map((category) => (
            <div>{String(category).toUpperCase()}</div>
          ))}
        </div>
        {products.length > 0 && (
          <Carousel show={isMobileView ? 1 : 3} useArrowKeys>
            {products?.map((product) => (
              <div key={product?.id} className={classes.cardCss}>
                <div className={classes.imgCon}>
                  <img
                    className={classes.cardImg}
                    src={product?.image}
                    alt="Card_image"
                  />
                  <img src="arrow.svg" alt="arrow" className={classes.arrow} />
                </div>

                <div className="card-body">
                  <h5 className={classes.title}>
                    {product?.title.slice(0, 18)}
                  </h5>
                  <p className={classes.desc}>
                    {product?.description.slice(0, 131)}
                  </p>
                  <p className={classes.price}>{`$ ${product?.price}`}</p>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </>
  );
};

export default Product;
