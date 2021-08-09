import React, { useState, useEffect } from "react";

const NewOrderPage = () => {
    const [menuItems, setMenuItems] = useState([]);
    console.log("hitting new order page");
    // - Fetch the menuItems from the server via AJAX
    // - When the data comes back, call setMenuItems to save in state
    useEffect(() => {
        console.log("New Order Page rendered");
    });

    // Add this useEffect with a dependency array
    useEffect(function () {
        console.log("useEffect with dependency array ran");
    }, [menuItems]);

    return (
        <>
            <h1>New Order Page</h1>
            <button onClick={setMenuItems}>Trigger re-render</button>
        </>
    );
};

export default NewOrderPage;
