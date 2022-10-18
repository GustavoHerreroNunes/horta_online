import { createBrowserRouter, Route } from 'react-router-dom';
import PageDefault from './pages/PageDefault';
import Home from './pages/Home';
import YourShoppingCart from './pages/YourShoppingCart'

const ErrorPage = () => (
    <PageDefault>
        <div className="container px-auto">
            <h2>An Error Occurred</h2>
        </div>
    </PageDefault>
);

const routes = createBrowserRouter([
    {
        path: "/",
        element: <PageDefault />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "your-shopping-cart",
                element: <YourShoppingCart />
            }
        ],
    }
]);

export default routes;