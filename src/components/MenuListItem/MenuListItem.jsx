import React from "react";

const MenuListItem = ({ menuItem, handleAddToOrder }) => {
    return (
        <div className='MenuListItem'>
            <div className='emoji flex-ctr-ctr'>{menuItem.emoji}</div>
            <div className='name'>{menuItem.name}</div>
            <div className='buy'>
                <span>${menuItem.price.toFixed(2)}</span>
                <button
                    className='btn-sm'
                    onClick={() => handleAddToOrder(menuItem.id)}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default MenuListItem;