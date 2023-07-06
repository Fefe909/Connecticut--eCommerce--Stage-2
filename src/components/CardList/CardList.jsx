import { useEffect, useState } from "react";
import Card from '../Card/Card';
import Preloader from "../Preloader/Preloader";


const CardList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (items.length == 0)
            fetch("https://645ec9f5f9c0732c342fcddc.mockapi.io/Productos")
                .then(response => response.json())
                .then(data => setItems(data))
    })
    return (
        <>
            {
                items.length == 0 ? <Preloader /> : (
                    <Card />
                )
            }
            
        </>
    );
};

export default CardList;