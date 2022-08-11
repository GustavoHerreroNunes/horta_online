import Logo from './Logo';
import Button from './Button';

const Footer = () => {
    return(
        <footer className="container-flex d-flex justify-content-around bg-dark text-light px-5 pt-4">
            <Logo />
            <div>
                <h3>Desenvolvedor</h3>
                <a href="https://github.com/GustavoHerreroNunes/">Gustavo Herrero Nunes</a>
                <div className="d-flex">
                    <a href="#"><Button className="text-light">Github</Button></a>
                    <a href="#"><Button className="text-light">Linkedin</Button></a>
                    <a href="#"><Button className="text-light">Instagram</Button></a>
                </div>
            </div>
            <span className="fw-bold">Feito com 💚 para <a href="https://www.frexco.com.br/">Frexco</a></span>
        </footer>
    );
}

export default Footer;