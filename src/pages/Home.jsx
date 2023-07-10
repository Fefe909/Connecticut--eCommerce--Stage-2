//import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import Main from "../layout/Main/Main";
import CardList from "../components/CardList/CardList";

/*
const HomeContent () => {

};

*/
export default function Home() {
    //const [search, setSearch] = useState('');
    const homeTitle = "Bienvenido a nuestro site";
    const homeDescription = "Estos son nuestros productos";

    return (
        <>
            <MainLayout pageTitle={homeTitle} pageDescription={homeDescription}>
                <CardList />
            </MainLayout>
        </>
    );
};
/*CHEQUEAR ENCTYPE (TYPE) Y ETIQUETA DE CIERRE DE TEXTAREA*/