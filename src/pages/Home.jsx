//import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import Main from "../layout/Main/Main";
import CardList from "../components/CardList/CardList";

/*
const HomeContent () => {

};

<MainLayout {children=<Card busqueda={busqueda}/>} />
*/
export default function Home() {
    //const [search, setSearch] = useState('');
    
    return (
        <>
            <MainLayout>
                <Main>
                    <CardList />
                </Main>
            </MainLayout>
        </>
    );
};
