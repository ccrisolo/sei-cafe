import React, { useState, useEffect } from "react";
import * as itemsAPI from "../utilities/items-api";

const NewOrderPage = () => {
    const [menuItems, setMenuItems] = useState([]);

    // Add this useEffect with a dependency array
    useEffect(() => {
        const getItems = async () => {
            const items = await itemsAPI.getAll();
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
