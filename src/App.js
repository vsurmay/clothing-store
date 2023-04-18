import classes from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./redux/actions/productsAction";
import { Outlet, Link } from "react-router-dom";
import { getProductsBasket } from "./redux/actions/basketAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductsBasket());
  }, []);

  return (
    <div className={classes.layout}>
      <Header />

      <Main>
        <Link to={"/admin"}>AdminLink</Link>
        <Outlet />
      </Main>

      <Footer />
    </div>
  );
}

export default App;
