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
            <Product id={1} name="Banana Prata" price="10.30" unit="kg" />
            <Product id={2} name="Banana Prata" price="10.30" unit="kg" />
            <Product id={3} name="Banana Prata" price="10.30" unit="kg" />
            <Product id={4} name="Banana Prata" price="10.30" unit="kg" />
            <Product id={5} name="Banana Prata" price="10.30" unit="kg" />
            <Product id={6} name="Banana Prata" price="10.30" unit="kg" />
            <Product id={7} name="Banana Prata" price="10.30" unit="kg" />
            <Product id={8} name="Banana Prata" price="10.30" unit="kg" />
            <Product id={9} name="Banana Prata" price="10.30" unit="kg" />
            <Product id={10} name="Banana Prata" price="10.30" unit="kg" />
            <Product id={11} name="Banana Prata" price="10.30" unit="kg" />
            <Product id={12} name="Banana Prata" price="10.30" unit="kg" />
            <Product id={13} name="Banana Prata" price="10.30" unit="kg" />
          </div>

        </Content>
        <Footer />
      </>
    );
  }
}

export default App;
