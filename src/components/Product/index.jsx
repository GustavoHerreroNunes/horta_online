import React from 'react';
import Button from '../Button'
import Strawberry from '../../assets/products/strawberry.jpg';
import productsAddedListController from '../../controllers/productsAddedListController';

const SelectQuantity = ({change, quantity}) => (
        <div className="input-group mb-1">
                <Button className="btn-primaryColor" onClick={() => { change("DECREMENT") }}>-</Button>
                <input className='form-control' type="number" name="productQuantity" value={quantity} onChange={(event) =>{ change("REDECLARE", event.target) }} />
                <Button className="btn-primaryColor" onClick={() => { change("INCREMENT") }}>+</Button>
        </div>
);

const BtnRemoveProduct = ({remove}) => (
    <div className="row flex-row-reverse">
        <Button className="col-2 text-danger fs-5" onClick={remove} >X</Button>
    </div>
);


class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {added: false, quantity: 0};

        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
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

    componentDidUpdate(){
        console.log(`Products Added Id's: ${productsAddedListController.list}`);
        console.log(`Quantity: ${this.state.quantity}`);
    }

    render(){
        
        return(
            <div className='col-12 col-md-4 col-lg-3 border-top border-primaryColor'>
                {this.state.added && <BtnRemoveProduct remove={this.removeProduct} />}
                <div className="row my-3">
                    <div className="col-4 col-md-12">
                        <img src={Strawberry} placeholder={`Imagem do produto '${this.props.name}'`} width='100%'/>
                    </div>
                    <div className="col-4 col-md-12">
                        <h6>{this.props.name}</h6>
                        {`R$ ${this.props.price}/${this.props.unit}`}
                    </div>
                    <div className="col-4 col-md-12 d-flex flex-column justify-content-around">
                        {this.state.added 
                            ? <SelectQuantity change={this.changeQuantity} quantity={this.state.quantity} /> 
                            : <Button className='mb-1 btn-primaryColor' onClick={this.addProduct}>Adicionar</Button>
                        }
                        
                        <Button className='btn-secondaryColor'>Nutrição</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;