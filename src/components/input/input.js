import React from "react";

function Input({type,className,name,onChange,required,value}) {
  return (

        <div className="row">
          <div className="input-field col s12">
            <input type={type} className={className} onChange={onChange} required={required} value={value} />
            <label className="styleLabel active">{name}</label>
          </div>
        </div>
  )
}

export default Input;
