import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__left">
        <div className="nav__logo">
          Urban<span>Sphere</span>
        </div>
      </div>

      <div className="nav__center">
        <a>Platform</a>
        <a>Solutions</a>
        <a>Use Cases</a>
        <a>Docs</a>
      </div>

       <div className="nav__right">
        <Link to="/login" className="nav__cta">
          Sign In
        </Link>
      </div>
    </nav>
  );
}
