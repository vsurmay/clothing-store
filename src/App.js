import classes from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Admin from "./pages/Admin/Admin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./redux/actions/productsAction";
import Slider from "./components/Slider/Slider";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const menuItems = [
    {
      text: "home",
      key: "home",
    },
    {
      text: "shop",
      key: "shop",
    },
    {
      text: "blog",
      key: "blog",
    },
    {
      text: "sale",
      key: "sale",
    },
    {
      text: "contact us",
      key: "contact",
    },
  ];

  return (
    <div className={classes.layout}>
      <Header menuItems={menuItems} />

      <Main>
        <Admin />
        {products.map((product) => (
          <ProductCard data={product} key={product.id} />
        ))}
        {/* <Slider /> */}
      </Main>

      <Footer />
    </div>
  );
}

export default App;
