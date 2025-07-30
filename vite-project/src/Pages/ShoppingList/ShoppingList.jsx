import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function ShoppingList()
{
    const [items, setItems]=useState([]);
    const [newItem, setNewItem]=useState("");

    function handleItem(e)
    {
        setNewItem(e.target.value);
    }

    function addNewItem()
    {
        setItems(i=>[...i, newItem])
        setNewItem("");
    }

    function deleteItem(indexToDelete){
        const newItemsList=items.filter((item, index)=>index!==indexToDelete);
        setItems(newItemsList);
    }

    return(
        <>
            {items.map((item,index)=>
                <li key={index}>
                        {item} 
                        <button onClick={()=>deleteItem(index)}>Delete</button>
                </li>
            )}

            <input placeholder="Write your item here"
                   onChange={handleItem}
                   value={newItem} 
                />
            <button onClick={addNewItem}>Add new item</button>

            <br/>
            <Link to={'/'}>Go back home</Link>
        </>
    );
}

export default ShoppingList;