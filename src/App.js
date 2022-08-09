import MenuBar from "./components/MenuBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './styles/index.css';

function App() {
  return (
    <>
      <MenuBar />
      <Content titlePage="Teste">
        Hello World
      </Content>
      <Footer />
    </>
  );
}

export default App;
