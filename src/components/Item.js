import React from 'react'

function Item( {items, index, removeItems}) {
    let date = new Date(items.date);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    const removeHandle = i => {
        removeItems(i);
    }

  return (
    <div className="item">
        <button className="remove-item" onClick={() =>
        removeHandle(index)}>x</button>
        <div className="desc">{items.desc}</div>
        <div className="number">{items.number}</div>
        <div className="date">{"Date Planted: " + month + "/" + day + "/" + year}</div>

    </div>
  )
}

export default Item