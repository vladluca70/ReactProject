import { useState } from "react";
import { Link } from "react-router-dom";
import "./BMICalculator.css";

function BMICalculator() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(1);
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const calculateBMI = () => {
    if (weight && height) {
      const rez = weight / (height * height);
      setBmi(rez.toFixed(2));
      setCategory(getBMICategory(rez));
    } else {
      setBmi("Invalid data");
      setCategory("");
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    if (bmi < 35) return "Obesity Class I (Moderate)";
    if (bmi < 40) return "Obesity Class II (Severe)";
    return "Obesity Class III (Very severe or Morbid)";
  };

  return (
    <main className="bmi-container">
      <h2 className="bmi-title">BMI Calculator</h2>

      <input
        className="bmi-input"
        placeholder="Insert your weight (kg)"
        onChange={handleWeight}
        type="number"
        min="0"
      />

      <input
        className="bmi-input"
        placeholder="Insert your height (m)"
        onChange={handleHeight}
        type="number"
        step="0.01"
        min="0"
      />

      <button className="bmi-button" onClick={calculateBMI}>
        Send data
      </button>

      {bmi !== null && (
        <div className="bmi-result">
          <p>Your BMI is <strong>{bmi}</strong>.</p>
          {category && <p>Category: <strong>{category}</strong></p>}
        </div>
      )}

      <Link className="bmi-link" to="/">Go back home</Link>
    </main>
  );
}

export default BMICalculator;
