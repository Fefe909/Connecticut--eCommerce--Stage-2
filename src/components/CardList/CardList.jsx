import { useEffect, useState } from "react";
import Card from '../Card/Card';
import Preloader from "../Preloader/Preloader";
import './CardList.scss';

const CardList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (items.length === 0)
            fetch("https://645ec9f5f9c0732c342fcddc.mockapi.io/Productos")
                .then(response => response.json())
                .then(data => setItems(data))
    },[]);

    return (
        <ul className="cards-container" id="cards-container">
            {
                items.length === 0 ? <Preloader /> : items.map((product) => (
                        <Card 
                        key={product.id}
                        image={product.imagen}
                        title={product.titulo}
                        description={product.descripcion}
                        price={product.precio}
                        />
                ))
            }
        </ul>
    );
};
export default CardList;