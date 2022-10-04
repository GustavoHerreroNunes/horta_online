import Logo from '../Logo';
import Button from '../Button';

const Footer = () => {
    return(
        <footer className="container-flex bg-dark text-light py-4">
            <div className="container d-flex justify-content-around">
                <div className="row d-flex justify-content-evenly w-100">
                    <div className="col-lg-4 col-md-3 col-12 text-center">
                        <Logo />
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-6 col-12 mt-md-0 mt-4">
                        <h3>Desenvolvedor</h3>
                        <a href="https://github.com/GustavoHerreroNunes/">Gustavo Herrero Nunes</a>
                        <div>
                            <a href="#"><Button className="text-light">Github</Button></a>
                            <a href="#"><Button className="text-light">Linkedin</Button></a>
                            <a href="#"><Button className="text-light">Instagram</Button></a>
                        </div>
                        
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt-md-0 mt-4">
                        <span className="fw-bold">Feito com ❤️ para você, cliente!</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;