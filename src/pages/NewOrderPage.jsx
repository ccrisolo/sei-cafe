import React, { useState, useEffect, useRef } from "react";
import * as itemsAPI from "../utilities/items-api";

const NewOrderPage = () => {
    const [menuItems, setMenuItems] = useState([]);
    //create and initialize to an empty array a categories ref
    const categoriesRef = useRef([]);

    // Add this useEffect with a dependency array
    useEffect(() => {
        const getItems = async () => {
            const items = await itemsAPI.getAll();
            //compute the categories after items have arrived
            categoriesRef.current = items.reduce((cats, item) => {
                const cat = item.category.name;
                return cats.includes(cat) ? cats : [...cats, cat];
            }, []);
            setMenuItems(items);
        };
        getItems();
    }, []);

    return (
        <>
            <h1>New Order Page</h1>
            <button onClick={setMenuItems}>Trigger re-render</button>
        </>
    );
};

export default NewOrderPage;
