import React from 'react';
import Button from './Button'
import Strawberry from '../assets/products/strawberry.jpg';

let productModal = (
    <div class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
);

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {size: 'MINIMIZED', added: false}
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
                        <Button className='btn-success mb-1 btnNutricional'>Adicionar</Button>
                        <Button className='btn-info btnNutricional'>Nutrição</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;