import PageDefault from "../PageDefault";
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error);

    return(
        <PageDefault>
            <div className="container px-auto">
                <h2>Ops...um erro ocorreu</h2>
                <p>Tente recarregar a página ou acessar outra parte de nosso site pelo menu.</p>
            </div>
        </PageDefault>
    );
}


export default Error;
