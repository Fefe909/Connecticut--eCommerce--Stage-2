import { useEffect, useState } from "react";

const useApiCall = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        if (items.length === 0)
            fetch("http://localhost:5000/productos")
                .then(response => response.json())
                .then(data => setItems(data));
    }, [items]);
    
    return items;
};
export default useApiCall;