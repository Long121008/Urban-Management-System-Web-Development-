// export default function CityData() {
//   return (
//     <section className="city-data">
//       <div className="city-data__content">
//         <h2>Data That Moves the City</h2>

//         <p>
//           UrbanSphere aggregates thousands of data points to give planners,
//           authorities, and technicians full situational awareness.
//         </p>

//         <ul>
//           <li>⚡ Energy & water usage</li>
//           <li>🚦 Traffic heatmaps</li>
//           <li>🏗️ Construction & maintenance tracking</li>
//           <li>🛡️ Emergency response coordination</li>
//         </ul>
//       </div>

//       <div className="city-data__visual">
//         <div className="holo-card"></div>
//       </div>
//     </section>
//   );
// }


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { name: "6 AM", traffic: 120 },
  { name: "9 AM", traffic: 380 },
  { name: "12 PM", traffic: 290 },
  { name: "3 PM", traffic: 450 },
  { name: "6 PM", traffic: 520 },
  { name: "9 PM", traffic: 260 },
];

export default function CityData() {
  return (
    <section className="city-data">
      <div className="city-data__content">
        <h2>Data That Moves the City</h2>
        <p>
          UrbanSphere aggregates thousands of data points to give planners,
          authorities, and technicians full situational awareness.
        </p>

        <ul>
          <li>⚡ Energy & water usage</li>
          <li>🚦 Traffic heatmaps</li>
          <li>🏗️ Construction & maintenance tracking</li>
          <li>🛡️ Emergency response coordination</li>
        </ul>
      </div>

      <div className="city-data__chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="rgba(255,255,255,0.1)" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="traffic"
              stroke="#38bdf8"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
