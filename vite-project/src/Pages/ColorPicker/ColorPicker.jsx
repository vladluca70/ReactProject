import { useState } from "react";
import { Link } from "react-router-dom";
import "./ColorPicker.css";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <main className="color-picker-container">
      <section className="color-picker-section">
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          aria-label="Choose color"
          className="color-input"
        />
        <p>
          The code is <span className="color-code">{color}</span>
        </p>
      </section>

      <Link to="/">Go back home</Link>
    </main>
  );
}

export default ColorPicker;
