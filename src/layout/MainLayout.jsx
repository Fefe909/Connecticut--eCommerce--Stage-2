import React from "react";
import "./MainLayout.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";


const MainLayout = ({ children, titulo }) => {
    return (
        <>
            <Header>
                {/*titulo ejemplo*/}
            </Header>
            <Main>
                {children}
            </Main>
            <Footer/>
            
        </>
    );
};



export default MainLayout;