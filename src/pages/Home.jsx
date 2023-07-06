import { useState } from "react";

/*
const HomeContent () => {

};
*/
export default function Home() {
    //const [search, setSearch] = useState('');
    
    return (
        <>
            <MainLayout children={<Card busqueda={busqueda}/>} />
        </>
    );
};
