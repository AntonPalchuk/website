import React from "react";

function Checkboxes({className,title,onChange,value = false}) {
  return (
          <label>
            <input type="checkbox" className={className} onChange={onChange} checked={value}/>
            <span>{title}</span>
          </label>
  )
}

export default Checkboxes;
