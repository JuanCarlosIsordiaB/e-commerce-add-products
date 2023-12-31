import { createContext, useContext, useState } from "react"

const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {}
})

export const Store = ({children}) => {
  const [items, setItems] = useState([]);

  const createItem = (item) => {
    setItems([item, ...items]);
    console.log(items);
  }

  const getItem = (id) => {
    const item = items.find(item => item.id === id);
    return item;
  }


  return (
    <AppContext.Provider value={{items, createItem, getItem}}>
      {children}
    </AppContext.Provider>
  )
}

export default function useAppContext() {
  return useContext(AppContext);
}
