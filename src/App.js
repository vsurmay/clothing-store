import classes from "./App.module.scss";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Admin from "./pages/Admin/Admin";

function App() {
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
      </Main>

      <Footer />
    </div>
  );
}

export default App;
