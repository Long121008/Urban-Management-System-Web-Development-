export default function Features() {
  return (
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
  );
}
