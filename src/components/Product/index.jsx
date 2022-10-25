import React from 'react';
import Button from '../Button'
import Strawberry from '../../assets/products/strawberry.jpg';
import productsAddedListController from '../../controllers/productsAddedListController';

const PAGE = {HOME: "HOME", YOUR_SHOPPING_CART: "YOUR_SHOPPING_CART"};

const SelectQuantity = ({change, quantity}) => (
        <div className="input-group mb-1">
                <Button className="btn-primaryColor" onClick={() => { change("DECREMENT") }}>-</Button>
                <input className='form-control' type="number" name="productQuantity" value={quantity} onChange={(event) =>{ change("REDECLARE", event.target) }} />
                <Button className="btn-primaryColor" onClick={() => { change("INCREMENT") }}>+</Button>
        </div>
);

const BtnRemoveProduct = ({remove}) => (
    <div className="row flex-row-reverse">
        <Button className="col-2 text-danger fs-5 text-end" onClick={remove} >X</Button>
    </div>
);

const TxbSeparationInstruction = ({change, value}) => (
    <input 
        className="form-control" 
        type="text" 
        name="txbSeparationInstruction" 
        value={value} 
        placeholder="Instruções de Separação" 
        onChange={(event) => { change(event.target) } }>
    </input>
);

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {added: false, quantity: 0, separationInstruction: ""};

        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.changeSeparationInstruction = this.changeSeparationInstruction.bind(this);

        this.intializeClassNames();
    }

    intializeClassNames(){
        this.classNames = {
            productDiv: `col-12 col-md-${(this.props.location == PAGE.HOME) ? "4 col-lg-3" : "12"} py-3 border-top border-primaryColor`,
            productColumns: `col-4 ${(this.props.location == PAGE.HOME) && "col-md-12"}`,
            productButtonGroup: `col-4 ${(this.props.location == PAGE.HOME) && "col-md-12"} d-flex flex-column justify-content-evenly`
        }
    }

    addProduct(){
        productsAddedListController.addProduct(this.props.id, this.props.price);
        this.setState({added: true});
    }

    removeProduct(){
        productsAddedListController.removeProduct(this.props.id, this.props.price);
        this.setState({added: false});
    }

    changeQuantity(operation, inputElement){
        console.log("Changing product quantity");
        
        if(operation){
            this.setState((state, props) => {
                let newQuantity = state.quantity;
    
                switch(operation){
                    case "INCREMENT":
                        newQuantity++;
                        break;
        
                    case "DECREMENT":
                        newQuantity--;
                        break;
    
                    case "REDECLARE":
                        if(inputElement){
                            newQuantity = parseInt(inputElement.value);
                        }else{
                            console.log("Error: Uninformed newValue");
                        }
                        break; 
        
                    default: 
                        console.log("Error: Operation is invalid to change Product Quantity");
                        break;
                }
                
                return {quantity: newQuantity}
            });

        }else{
            console.log("Error: Uninformed operation");
        }

    }

    changeSeparationInstruction(inputElement){
        const newInstructions = inputElement.value;
        this.setState({ separationInstruction: newInstructions });
    }

    componentDidUpdate(){
        console.log(`Products Added Id's: ${productsAddedListController.list}`);
        console.log(`Quantity: ${this.state.quantity}`);
        console.log(`Separation Instruction: ${this.state.separationInstruction}`);
    }

    render(){
        return(
            <div className={this.classNames.productDiv}>
                {this.state.added && <BtnRemoveProduct remove={this.removeProduct} />}
                <div className="row">
                    <div className={this.classNames.productColumns}>
                        <img src={Strawberry} placeholder={`Imagem do produto '${this.props.name}'`} width='100%'/>
                    </div>
                    <div className={this.classNames.productColumns}>
                        <h6>{this.props.name}</h6>
                        <p>{`R$ ${this.props.price}/${this.props.unit}`}</p>
                        {this.state.added && 
                            <>
                                <h6>Total</h6>
                                <p>{`R$ ${this.props.price*2}`}</p>
                            </>
                        }
                    </div>
                    <div className={this.classNames.productButtonGroup}>
                        {this.state.added 
                            ? <SelectQuantity change={this.changeQuantity} quantity={this.state.quantity} /> 
                            : <Button className='mb-1 btn-primaryColor' onClick={this.addProduct}>Adicionar</Button>
                        }
                        
                        <Button className='btn-secondaryColor'>Nutrição</Button>
                    </div>
                </div>
                {this.props.location == PAGE.YOUR_SHOPPING_CART &&
                    <div className="row mt-2">
                        <div className="col-12">
                            <TxbSeparationInstruction change={this.changeSeparationInstruction} value={this.state.separationInstruction} />
                        </div>
                    </div>    
                }
            </div>
        );
    }
}

export default Product;