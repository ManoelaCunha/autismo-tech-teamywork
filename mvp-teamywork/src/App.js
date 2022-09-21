import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Router from "./routes";
import GlobalStyles from "./styles/global";

const App = () => {
  return (
    <>
      <Menu />
      <Router />
      <Footer />
      <GlobalStyles />
    </>
  );
};

export default App;
