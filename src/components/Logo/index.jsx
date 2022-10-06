import { Link } from 'react-router-dom';
import logo from '../../assets/strawberry-128.png';

const Logo = ({className}) => {
    return(
        <Link to="/" className={className}>
            <img src={logo} alt="Logotipo do 'Horta Online'. Ícone de um Morango" width="45" height="45" />
            <span className="d-md-inline d-none">Horta Online</span>
        </Link>
    );
}

export default Logo;