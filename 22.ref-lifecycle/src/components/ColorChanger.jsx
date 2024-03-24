import React, { useState, useRef } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState(""); 
  const [bgColor, setBgColor] = useState("transparent"); 
  const inputRef = useRef(null); 

  const handleChangeColor = () => {
    if (color.trim() === "") return;
    setBgColor(color); 
    setColor(""); 
    inputRef.current.focus(); 
  };

  return (
   
      <div style={{ backgroundColor: bgColor, padding: "20px", marginTop: "10px", width: "25%" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        ref={inputRef}
        style={{ width: "50%", marginBottom: "10px" }}
      />
      <div style={{ width: "25%" }}>
        <button onClick={handleChangeColor} style={{ width: "100%" }}>색 적용</button>
      </div>
        
      </div>
    </div>
  );
}
