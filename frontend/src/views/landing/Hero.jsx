// export default function Hero() {
//   return (
//     <header className="hero">
//       <div className="hero__content">
//         <h1>
//           A Smarter Way to Manage <span>Cities</span>
//         </h1>

//         <p>
//           Real-time monitoring, AI-driven forecasting, and a unified dashboard
//           to manage every aspect of modern urban infrastructure.
//         </p>

//         <button className="hero__button">Explore the Platform</button>
//       </div>

//       <div className="hero__visual">
//         <div className="hero__glow"></div>
//         <img
//           src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
//           alt="City"
//         />
//       </div>
//     </header>
//   );
// }

// export default function Hero() {
//   return (
//     <section className="hero hero--bg">
//       <div className="hero__overlay"></div>

//       <div className="hero__content hero__content--center">
//         <h1>
//           A Smarter Way to Manage <span>Cities</span>
//         </h1>

//         <p>
//           Real-time monitoring, AI-driven forecasting, and a unified dashboard
//           to manage every aspect of modern urban infrastructure.
//         </p>

//         <button className="hero__button">Explore the Platform</button>
//       </div>
//     </section>
//   );
// }
import cityVideo from "../../assets/vehicle.mp4"
export default function Hero() {
  return (
    <section className="hero hero--video">
      <video
        className="hero__video"
        src={cityVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="hero__overlay"></div>

      <div className="hero__content hero__content--center">
        <h1>
          A Smarter Way to Manage <span>Cities</span>
        </h1>

        <p>
          Real-time monitoring, AI-driven forecasting, and a unified dashboard
          to manage modern urban infrastructure.
        </p>

        <button className="hero__button">Explore the Platform</button>
      </div>
    </section>
  );
}


