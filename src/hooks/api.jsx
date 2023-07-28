import { useEffect, useState } from "react";

const useApiCall = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        if (items.length === 0)
            fetch("https://645ec9f5f9c0732c342fcddc.mockapi.io/Productos")
                .then(response => response.json())
                .then(data => setItems(data));
    }, [items.length]);
    
    return items;
};
export default useApiCall;