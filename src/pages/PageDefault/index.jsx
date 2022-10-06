import { Component } from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

const PageDefault = ({ children }) => {
    return(
        <>
            <MenuBar />
            <Content titlePage="Teste">
                <Outlet />
                {children}
            </Content>
            <Footer />
        </>
    );
}

export default PageDefault;
