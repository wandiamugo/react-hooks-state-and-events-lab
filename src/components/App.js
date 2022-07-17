import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
   
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appDark, setAppDark] = useState(" ")
  const appClass = appDark ? "App dark" : "App light"

  function handleState() {
    setAppDark((appDark)=>appDark = !appDark)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleState}> {appDark ? "App dark" : "App light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
