import React, {useContext, createContext, useState } from "react";
import { useEffect } from "react";
import items from "../data/data.js"
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(items)
  const allCategories = ['all', ...new Set(items.map((item) => item.category))];

  const [categoryItems, setCategoryItems] = useState(allCategories)
  const fetchItems = () => {
    setMenuItems(items)
  }
useEffect(() => {
 fetchItems();
 
}, [])
const filterItems = (category) => {
  if (category === 'all') {
    setMenuItems(items);
    return;
  }
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems);


}

  return (
    <AppContext.Provider
      value={{
        menuItems,
        categoryItems,
        filterItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
