import { Link } from 'react-router-dom';
import Logo from '../Logo';
import Button from '../Button';
import Magnifier from '../../assets/magnifier.png';
import ShoppingCart from '../../assets/shopping-cart.png';
import { popper } from '@popperjs/core';

const MenuBar = () => (
        <nav className="navbar navbar-light">
            <div className="row d-flex justify-content-around w-100">
                <div className="col-md-3 col-2 text-center">
                    <Logo className="navbar-brand" />
                </div>
                <div className="col-md-6 col-10 text-center">
                    <form className="d-flex">
                        <input className="form-control" type="text" placeholder="Strawberry, banana, apple, etc" />
                        <Button className="btn-primaryColor fw-bold" image={Magnifier} alt="Pesquisar produto" />
                    </form>
                </div>

                <div className="col-3 d-md-inline d-none text-center">
                    <Link to="your-shopping-cart">
                        <Button className="btn-secondaryColor border-0 w-100" image={ShoppingCart} alt="Acessar carrinho de compras">R$:0,00</Button>
                    </Link>
                </div>

                <div className="col-4 d-md-none d-inline position-fixed bottom-0 end-0 mb-2 text-end">
                    <Link to="your-shopping-cart">
                        <Button className="btn-secondaryColor btn-ShoppingCart rounded-circle" image={ShoppingCart} alt="Acessar carrinho de compras">R$:0,00</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );

export default MenuBar;
