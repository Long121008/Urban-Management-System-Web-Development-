export default function Intro() {
  return (
    <section className="intro">
      <div className="intro__content">
        <h2>Why UrbanSphere?</h2>
        <p>
          UrbanSphere is built to empower modern cities with AI-powered insights,
          real-time monitoring, and seamless data integration. We combine sensor
          networks, predictive analytics, GIS mapping, and cutting-edge
          visualization into one powerful platform.
        </p>

        <ul>
          <li>✔ Unified governance for all departments</li>
          <li>✔ Predict future urban challenges</li>
          <li>✔ Real-time dashboards updated every second</li>
          <li>✔ Smarter operations with AI & automation</li>
        </ul>
      </div>

      <div className="intro__visual">
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="Smart city"
        />
      </div>
    </section>
  );
}
