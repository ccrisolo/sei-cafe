import React, { useState, useEffect } from "react";

const NewOrderPage = () => {
    const [menuItems, setMenuItems] = useState([]);

    // - Fetch the menuItems from the server via AJAX
    // - When the data comes back, call setMenuItems to save in state
    useEffect(() => {
        console.log("NewOrderPage rendered");
    });

    return (
        <>
            <h1>NewOrderPage</h1>
            <button onClick={setMenuItems}>Trigger re-render</button>
        </>
    );
};

export default NewOrderPage;
