import React from 'react';
import Button from '../Button'
import Strawberry from '../../assets/products/strawberry.jpg';

const SelectQuantity = ({change, quantity}) => (
        <div>
            <Button className="btn" onClick={change}>-</Button>
            <input type="number" name="productQuantity" value={quantity} />
            <Button className="btn" onClick={change}>+</Button>
        </div>
);


class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {added: false, quantity: 0}
    }
    render(){
        
        return(
            <div className='col-12 col-md-4 col-lg-3 mb-1 border'>
                <div className="row">
                    <div className="col-4 col-md-12">
                        <img src={Strawberry} placeholder={`Imagem do produto '${this.props.name}'`} width='100%'/>
                    </div>
                    <div className="col-4 col-md-12">
                        <h6>{this.props.name}</h6>
                        {`R$ ${this.props.price}/${this.props.unit}`}
                    </div>
                    <div className="col-4 col-md-12 d-flex flex-column  justify-content-around">
                        {this.state.added 
                            ? <SelectQuantity/> 
                            : <Button className='btn-success mb-1 btnNutricional'>Adicionar</Button>
                        }
                        
                        <Button className='btn-info btnNutricional'>Nutrição</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;