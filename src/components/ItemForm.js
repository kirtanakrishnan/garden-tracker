import React, {useRef} from 'react';


function ItemForm({items, setItems}) {
    const desc = useRef(null);
    const date = useRef(null);
    const number = useRef(null);

    const AddItem = e => {
        e.preventDefault();

        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2]);

        setItems([...items, {
            "desc": desc.current.value,
            "number": number.current.value,
            "date": newD.getTime()
        }]);

        desc.current.value = "";
        number.current.value = null;
        date.current.value = null;
    }



  return (
    <form className="item-form" onSubmit={AddItem}>
        <div className="form-inner">
            <input type="text" name="desc" id="desc" 
            placeholder="Item" ref={desc} />
            <input type="number" name="number" id="number"
            placeholder="Quantity" ref={number}/>
            <input type="date" name="date" id="date"
            placeholder="Date Planted:" ref={date}/>
            <input type="submit" value="Add Item"/>

        </div>
    </form>
  )
}

export default ItemForm