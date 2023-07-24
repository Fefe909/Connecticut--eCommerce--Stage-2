import React from "react";
import "./MainLayout.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const MainLayout = ({ children, pageTitle, pageDescription }) => {
    return (
        <>
            <Header />
            <Main pageTitle={pageTitle} pageDescription={pageDescription}>
                {children}
            </Main>
            <Footer/>
        </>
    );
};
export default MainLayout;