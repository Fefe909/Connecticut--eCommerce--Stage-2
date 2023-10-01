import { useContext } from "react";
import Card from '../Card/Card';
import Preloader from "../Preloader/Preloader";
import './CardList.scss';
import { SearchContext } from '../../layout/MainLayout';

const CardList = () => {
    const { search, items } = useContext(SearchContext);
    const filteredTitle = (item) => item.title?.toLowerCase().includes(search.toLowerCase());
    const filteredDescription = (item) => item.description?.toLowerCase().includes(search.toLowerCase());
    
    const filteredItems = items.filter((item) => {
        return filteredTitle(item) || filteredDescription(item);
    });

    return (
        <ul className="cards-container" id="cards-container">
            {
                (filteredItems.length === 0) ? <Preloader /> : (filteredItems.map((product) => (
                    <Card
                        key={product.id}
                        image={product.imagen}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                )))
            }
        </ul>
    );
};
export default CardList;