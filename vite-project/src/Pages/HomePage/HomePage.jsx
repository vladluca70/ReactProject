import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="homepage-container">
      <h1 className="homepage-title">Welcome to my page</h1>
      <p className="homepage-description">Here you can find a lot of apps</p>
      <hr className="homepage-divider" />

      <nav className="homepage-links">

        <Link className="homepage-link" to="/todolist">
          To Do List App
        </Link>
        <Link className="homepage-link" to="/shoppinglist">
          Shopping List App
        </Link>
        <Link className="homepage-link" to="/bmicalculator">
          BMI Calculator
        </Link>
        <Link className="homepage-link" to="/colorpicker">
          Color Picker
        </Link>
        
      </nav>
    </main>
  );
}

export default HomePage;
