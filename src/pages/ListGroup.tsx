import { useState } from "react";

interface Props{
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
    const [seletedIndex, setSelectedIndex] = useState(-1);
    

  return (
    <>
        <h1>{heading}</h1>
        {items.length === 0 ? <p>There are no items!</p> : null}
        {items.length === 0 && <p>There are no items!</p>}
        <ul className="list-group">
            {items.map((item, index )=> (
            <li className={seletedIndex === index ? 'list-group-item active' : 'list-group-item'} 
            key={item} 
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            >
              {item}
              </li>
            ))}
        </ul>
    </>
  );
}

export default ListGroup;
