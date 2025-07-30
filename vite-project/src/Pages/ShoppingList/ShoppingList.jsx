import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ShoppingList.css";

function ShoppingList() {
  const [items, setItems] = useState(
    ()=>{
      const savedItems=localStorage.getItem("items");
      return savedItems ? JSON.parse(savedItems) : []
    }
  );
  const [newItem, setNewItem] = useState("");

  useEffect(
    ()=>{
      localStorage.setItem("items", JSON.stringify(items))
    },[items]
  );

  const handleItem = (e) => {
    setNewItem(e.target.value);
  };

  const addNewItem = () => {
    if (newItem.trim() !== "") {
      setItems((i) => [...i, newItem.trim()]);
      setNewItem("");
    }
  };

  const deleteItem = (indexToDelete) => {
    const newItemsList = items.filter((_, index) => index !== indexToDelete);
    setItems(newItemsList);
  };

  return (
    <main className="shopping-container">
      <h2 className="shopping-title">Shopping List</h2>

      <ul className="shopping-list">
        {items.map((item, index) => (
          <li key={index} className="shopping-item">
            {item}
            <button className="delete-button" onClick={() => deleteItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="shopping-input-group">
        <input
          className="shopping-input"
          placeholder="Write your item here"
          onChange={handleItem}
          value={newItem}
        />
        <button className="add-button" onClick={addNewItem}>
          Add new item
        </button>
      </div>

      <Link className="shopping-link" to="/">
        Go back home
      </Link>
    </main>
  );
}

export default ShoppingList;
