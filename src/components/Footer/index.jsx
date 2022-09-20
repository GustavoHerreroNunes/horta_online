import Logo from '../Logo';
import Button from '../Button';

const Footer = () => {
    return(
        <footer className="container-flex d-flex justify-content-around bg-dark text-light px-5 pt-4">
            <div className="row d-flex justify-content-evenly w-100">
                <div className="col-lg-4 col-12 text-center">
                    <Logo />
                </div>
                <div className="col-lg-4 col-sm-6 col-12 text-center">
                    <h3>Desenvolvedor</h3>
                    <a href="https://github.com/GustavoHerreroNunes/">Gustavo Herrero Nunes</a>
                    <div className="d-flex justify-content-evenly">
                        <a href="#"><Button className="text-light">Github</Button></a>
                        <a href="#"><Button className="text-light">Linkedin</Button></a>
                        <a href="#"><Button className="text-light">Instagram</Button></a>
                    </div>
                    
                </div>
                <div className="col-lg-4 col-sm-6 col-12 text-center">
                    <span className="fw-bold">Feito com ❤️ para você, cliente!</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;