import React from "react";
import './TextArea.scss';

const TextArea = ({ label, name, rows, required, value, onChange }) => {
    const id = name.replace(' ','_').toLowerCase();
    
    return (
        <>
            <label className="labelForm" htmlFor={id}>
                {label}<span className="required">*obligatorio</span>
            </label>
            <textarea 
            className="textareaData" 
            id={id} 
            name={id}
            rows={rows} 
            required={required} 
            onChange={onChange}>
                {value}
            </textarea>
        </>
    );
};
export default TextArea;