import React, { useState, useEffect, createContext } from "react";
import "./MainLayout.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import useApiCall from "../hooks/api";

const SearchContext = createContext();

const MainLayout = ({ children, pageTitle, pageDescription }) => {
    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);
    const apiData = useApiCall();
    
    useEffect(() => {
        if (items.length === 0) {
            setItems(apiData);
        }
    }, [apiData.length]);
    
    return (
        <SearchContext.Provider value={{search, setSearch, items}}>
            <Header />
            <Main pageTitle={pageTitle} pageDescription={pageDescription}>
                {children}
            </Main>
            <Footer/>
        </SearchContext.Provider>
    );
};
export {MainLayout, SearchContext};