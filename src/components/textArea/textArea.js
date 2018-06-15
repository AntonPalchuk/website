import React from "react";

function TextArea({type,className,name,onChange,required,value}) {
  return (

        <div className="row">
          <div className="input-field col s12">
            <textarea type={type} className={className} onChange={onChange} required={required} value={value}></textarea>
            <label className="styleLabel active">{name}</label>
          </div>
        </div>
  )
}

export default TextArea;
