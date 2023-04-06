import classes from "./App.module.scss";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Admin from "./pages/Admin/Admin";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./redux/actions/productsAction";
import FillButton from "./components/UI/Buttons/FillButton";
import OutLineButton from "./components/UI/Buttons/OutLineButton";
import { EditOutlined } from "@ant-design/icons";
import Slider from "./components/Slider/Slider";

function App() {
  const dispatch = useDispatch();

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
        {/* <Admin /> */}
        <Slider />
      </Main>

      <Footer />
    </div>
  );
}

export default App;
