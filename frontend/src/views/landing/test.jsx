import React from "react";
import "../../assets/scss/landing.scss";

export default function LandingPage() {
  return (
    <div className="urban-landing">

      {/* NAV */}
      <nav className="nav">
        <div className="nav__logo">Urban<span>Sphere</span></div>
        <div className="nav__links">
          <a>Platform</a>
          <a>Solutions</a>
          <a>Use Cases</a>
          <a>Docs</a>
        </div>
        <button className="nav__cta">Request Demo</button>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero__content">
          <h1>
            A Smarter Way to Manage <span>Cities</span>
          </h1>
          <p>
            Real-time monitoring, AI-driven forecasting, and a unified dashboard
            to manage every aspect of modern urban infrastructure.
          </p>
          <button className="hero__button">Explore the Platform</button>
        </div>

        <div className="hero__visual">
          <div className="hero__glow"></div>
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            alt="City"
          />
        </div>
      </header>

      {/* FEATURES */}
      <section className="features">
        <h2>Transforming Urban Operations</h2>
        <div className="features__grid">

          <div className="feature-card">
            <div className="icon">🌐</div>
            <h3>Smart Mapping</h3>
            <p>Visualize every district, road, and asset with interactive GIS layers.</p>
          </div>

          <div className="feature-card">
            <div className="icon">📊</div>
            <h3>Real-time Dashboards</h3>
            <p>Monitor traffic, utilities, and incidents in one unified interface.</p>
          </div>

          <div className="feature-card">
            <div className="icon">🤖</div>
            <h3>AI Predictions</h3>
            <p>Forecast congestion, waste accumulation, or energy usage with ML models.</p>
          </div>

          <div className="feature-card">
            <div className="icon">🛰️</div>
            <h3>Sensor Integration</h3>
            <p>Connect IoT devices for 24/7 automated monitoring across the city.</p>
          </div>

        </div>
      </section>

      {/* CITY DATA */}
      <section className="city-data">
        <div className="city-data__content">
          <h2>Data That Moves the City</h2>
          <p>UrbanSphere aggregates thousands of data points to give planners,
             authorities, and technicians full situational awareness.</p>

          <ul>
            <li>⚡ Energy & water usage</li>
            <li>🚦 Traffic heatmaps</li>
            <li>🏗️ Construction & maintenance tracking</li>
            <li>🛡️ Emergency response coordination</li>
          </ul>
        </div>

        <div className="city-data__visual">
          <div className="holo-card"></div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="usecases">
        <h2>Built for Every Urban Department</h2>
        <div className="usecases__grid">

          <div className="usecase-card">🚓 Public Safety</div>
          <div className="usecase-card">🚧 Infrastructure</div>
          <div className="usecase-card">🗑️ Waste Management</div>
          <div className="usecase-card">🚍 Transportation</div>
          <div className="usecase-card">🏙️ Urban Planning</div>
          <div className="usecase-card">🌳 Environment</div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Build a Future-Ready City?</h2>
        <p>Let us help you modernize operations with data-driven governance.</p>
        <button>Book a Consultation</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__logo">Urban<span>Sphere</span></div>
        <div className="footer__links">
          <a>About</a>
          <a>Careers</a>
          <a>Contact</a>
          <a>Privacy</a>
        </div>
        <p>© 2025 UrbanSphere Technologies</p>
      </footer>
    </div>
  );
}
