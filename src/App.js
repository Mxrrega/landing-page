import "./global.css";
import Header from "./components/Header";
import Princ from "./components/Tela-principal";
import SubMarcas from "./components/SubMarcas-nike";
import Footer from "./components/Footer";

function App(props) {
  return (
    <>
    <Header />
    <Princ />
    <SubMarcas />
    <Footer />
    </>
  );
}

export default App;
