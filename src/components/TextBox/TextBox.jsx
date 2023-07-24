import React from "react";
import './TextBox.scss';

const TextBox = ({label, name, type, required, accept, multiple, onChange}) => {
    const id = name.replace(' ','_').toLowerCase();
    
    return (
        <>
            <label className="labelForm" htmlFor={id}>
                {label}<span className="required">*obligatorio</span>
            </label>
            <input 
            className="inputData" 
            id={id} 
            name={id} 
            type={type} 
            required={required} 
            {...(accept && { accept })}
            multiple={multiple} 
            onChange={onChange} />
        </>
    );
};
export default TextBox;