import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {


  const [isDark, setDark] = useState(false)
  const appClass = isDark ? "App dark" : "App light"
  function handleDarkClick(){
    setDark((isDark) => !isDark)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkClick}>{isDark ? "Light Mode" : "Dark Mode" }</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
