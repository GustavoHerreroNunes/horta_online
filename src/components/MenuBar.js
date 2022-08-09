import Logo from './Logo';
import Button from './Button';
import Magnifier from '../assets/magnifier.png';
import ShoppingCart from '../assets/shopping-cart.png';
import { popper } from '@popperjs/core';
import '../bootstrap-dist/js/bootstrap';

const MenuBar = () => {
    return(
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <Logo className="navbar-brand" />
                <form className="d-flex">
                    <input className="form-control" type="text" placeholder="Strawberry, banana, apple, etc" />
                    <Button className="btn-primary fw-bold" image={Magnifier} alt="Pesquisar produto" />
                </form>
                <Button image={ShoppingCart} alt="Acessar carrinho de compras">R$:0,00</Button>
            </div>
        </nav>
    );
}

export default MenuBar;
