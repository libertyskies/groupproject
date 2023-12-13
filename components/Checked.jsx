import React from "react";
import { useState } from "react";


export function CheckListItem() {
const [checked, setChecked] = useState([]);
  const checkList = ["Pet Carrier", "Litter Tray", "Collar", "Scratching Post", "Treats", "Toys", "Food and Water Bowls", "Bed and Blankets"];

  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };


  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total +  ", " + item;
      })
    : "";
  
  let isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
  return (
    <div className="listItems">
      <div className="checkList">
        <h1 className="title">New Kitten Checklist:</h1>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        {`Yay! Your kitten will be so pleased! You already have: ${checkedItems}`}
        <br></br>
        <div id="extra-info"><p>You should also be registered with a vet. See our <a href='./FAQ' className="kitten-link">FAQs</a> for more advice!</p></div>
      </div> 
      
    </div>
  );
}