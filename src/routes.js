import { createBrowserRouter, Route } from 'react-router-dom';
import PageDefault from './pages/PageDefault';
import Error from './pages/Error';
import Home from './pages/Home';
import YourShoppingCart from './pages/YourShoppingCart'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <PageDefault />,
        errorElement: <Error />,
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