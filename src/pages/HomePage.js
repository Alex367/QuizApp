import { Link } from "react-router-dom";
// import classes from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <section className="main_section">
      <h1>Welcome to Quiz App</h1>
      <div className="homepage_ref">
        <Link to="/question">Start the quiz</Link>
      </div>
    </section>
  );
}
