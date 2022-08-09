import logo from '../assets/strawberry-128.png';

const Logo = ({className}) => {
    return(
        <a href="#" className={className}>
            <img src={logo} alt="Logotipo do 'Horta Online'. Ícone de um Morango" width="45" height="45" />
            Horta Online
        </a>
    );
}

export default Logo;