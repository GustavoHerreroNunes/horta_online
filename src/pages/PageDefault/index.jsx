import { Component } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

const PageDefault = ({ children }) => {
    const currentLocation = useLocation();
    const currentPageStartIndex = currentLocation.pathname.search("/")+1;
    const currentPageURL = currentLocation.pathname.substring(currentPageStartIndex);
    const pageName = !currentPageURL.length ? "Produtos" : 
                    currentPageURL.startsWith("your-shopping-cart") ? "Seu Carrinho" : 
                    "404 - Página não encontrada"
                    ;

    return(
        <>
            <MenuBar />
            <Content titlePage={pageName}>
                <Outlet />
                {children}
            </Content>
            <Footer />
        </>
    );
}

export default PageDefault;
