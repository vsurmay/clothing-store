import classes from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Admin from "./pages/Admin/Admin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "./redux/actions/productsAction";
import Slider from "./components/Slider/Slider";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductPage from "./pages/ProductPage/ProductPage";
import PickSize from "./components/PickSize/PickSize";
import { Outlet, Link } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);

  // =============
  const [activeProductPage, setActiveProductPage] = useState({
    active: false,
    product: {},
  });

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={classes.layout}>
      <Header />

      <Main>
        <Link to={"/admin"}>AdminLink</Link>
        <Outlet />
        {/* <Admin />
        <div style={{ display: "flex" }}>
          {products.map((product) => (
            <ProductCard
              setActiveProductPage={setActiveProductPage}
              data={product}
              key={product.id}
            />
          ))}
        </div>
        {activeProductPage.active ? (
          <ProductPage product={activeProductPage.product} />
        ) : null}
        <Slider /> */}
      </Main>

      <Footer />
    </div>
  );
}

export default App;
