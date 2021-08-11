import React, { useState, useEffect, useRef } from "react";
import * as itemsAPI from "../utilities/items-api";
import "./NewOrderPage.css";
import { Link } from "react-router-dom";
import MenuList from "../components/MenuList/MenuList";
import Logo from "../components/Logo/Logo";
import CategoryList from "../components/CategoryList/CategoryList";
import UserLogOut from "../components/UserLogOut/UserLogOut";
import OrderDetail from "../components/OrderDetail/OrderDetail";

const NewOrderPage = ({ user, setUser }) => {
    const [menuItems, setMenuItems] = useState([]);
    const [activeCat, setActiveCat] = useState("");
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
            setActiveCat(items[0].category.name);
        };
        getItems();

    }, []);


    return (
        <main className='NewOrderPage'>
            <aside>
                {/* <Logo /> */}
                {/* <CategoryList /> */}
                <Link to='/orders' className='button btn-sm'>
                    PREVIOUS ORDERS
                </Link>
                {/* <UserLogOut /> */}
            </aside>
            <MenuList
                menuItems={menuItems}
                // handleAddToOrder={handleAddToOrder}
            />
            <OrderDetail />
        </main>
    );
};

export default NewOrderPage;
