import { Component } from "react";
import MenuBar from "./components/MenuBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Product from "./components/Product";

const LoadingWidget = () => {
  return(
    <div className="">

    </div>
  );
}

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
        <MenuBar />
        <Content titlePage="Frutas">
          <p>
            As melhores frutas da nossa horta para a sua casa!
          </p>
          <div className="row">
            <Product name="Banana Prata" price="10.30" unit="kg" />
            <Product name="Banana Prata" price="10.30" unit="kg" />
            <Product name="Banana Prata" price="10.30" unit="kg" />
            <Product name="Banana Prata" price="10.30" unit="kg" />
            <Product name="Banana Prata" price="10.30" unit="kg" />
            <Product name="Banana Prata" price="10.30" unit="kg" />
            <Product name="Banana Prata" price="10.30" unit="kg" />
            <Product name="Banana Prata" price="10.30" unit="kg" />
            <Product name="Banana Prata" price="10.30" unit="kg" />
            <Product name="Banana Prata" price="10.30" unit="kg" />
            <Product name="Banana Prata" price="10.30" unit="kg" />
            <Product name="Banana Prata" price="10.30" unit="kg" />
            <Product name="Banana Prata" price="10.30" unit="kg" />
          </div>

        </Content>
        <Footer />
      </>
    );
  }
}

export default App;
