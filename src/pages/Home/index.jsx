import Product from "../../components/Product";

const Home = () => {
    return(
        <>
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
        </>
    );
}

export default Home;
