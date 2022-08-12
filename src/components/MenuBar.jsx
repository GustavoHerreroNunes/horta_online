import Logo from './Logo';
import Button from './Button';
import Magnifier from '../assets/magnifier.png';
import ShoppingCart from '../assets/shopping-cart.png';
import { popper } from '@popperjs/core';
import '../bootstrap-dist/js/bootstrap';

const MenuBar = () => (
        <nav className="navbar navbar-light bg-light">
            <div className="row d-flex justify-content-around w-100">
                <div className="row col-lg-4 col-12 text-center">
                    <Logo className="navbar-brand" />
                </div>
                <div className="row col-lg-4 col-12">
                    <form className="d-flex">
                        <input className="form-control" type="text" placeholder="Strawberry, banana, apple, etc" />
                        <Button className="btn-primary fw-bold" image={Magnifier} alt="Pesquisar produto" />
                    </form>

                </div>
                <div className="row col-lg-4 col-12">
                    <Button image={ShoppingCart} alt="Acessar carrinho de compras">R$:0,00</Button>
                </div>
            </div>
        </nav>
    );

export default MenuBar;
