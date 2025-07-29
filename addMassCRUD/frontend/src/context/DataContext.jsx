import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [editItems, setEditItems] = useState(false)
    const [editItemsData, setEditItemsData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/crudItems");
            setItems(response.data.data);
        } catch (error) {
            console.error("Fetching Data Error!", error);
            setCatchError("Items Not found!")
        }
    };

    

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ items, editItems, editItemsData, setEditItems, setEditItemsData, fetchData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
