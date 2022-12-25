import React from 'react'
import Item from './Item'

function ItemList( { items, setItems }) {
    const removeItems = i => {
        let temp = items.filter((v, index) => index != i)
        setItems(temp)
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }
  return (
    <div className="item-list">
        {
            items.sort(sortByDate).map((value, index) => (
                <Item 
                key={index} 
                items={value} 
                index={index}
                removeItems={removeItems}
                />
            ))
        }


    </div>
  )
}

export default ItemList