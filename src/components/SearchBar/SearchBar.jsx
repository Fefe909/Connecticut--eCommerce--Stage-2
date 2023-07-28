import React, { useContext } from "react";
import './SearchBar.scss';
import { SearchContext } from "../../layout/MainLayout";

const SearchBar = () => {
    const {search, setSearch} = useContext(SearchContext);
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Buscar.." value={search} onChange={handleSearchChange} />
            <button className="search-bar__button">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    );
}
export default SearchBar;