import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'
import Subtitle from './components/Subtitle'

function App() {
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < items.length; i++) {
      temp += parseInt(items[i].number);

    }

    setTotalItems(temp);

  }, [items]);


  return (
    <div className="App">
      <Header totalItems={totalItems} />
      <Subtitle/>
      <ItemForm items={items} setItems={setItems}/>
      <ItemList items={items} setItems={setItems} />
    </div>
  );
}

export default App;
