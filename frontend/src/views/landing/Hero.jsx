export default function Hero() {
  return (
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
  );
}
