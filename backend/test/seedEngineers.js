const mongoose = require("mongoose");
const User = require("../models/User"); // Import the User model
const Role = require("../models/Role"); // Import the Role model
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const seedEngineers = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/react-auth';
           await mongoose.connect(mongoURI, {
               useNewUrlParser: true,
               useUnifiedTopology: true
           });

    console.log("Connected to the database.");

    // Ensure the 'technician' role exists
    let technicianRole = await Role.findOne({ name: "technician" });
    if (!technicianRole) {
      technicianRole = await Role.create({ name: "technician", permissions: [] });
      console.log("Created 'technician' role.");
    }

    // Define engineer data
    const engineers = [
      {
        fullName: "John Doe",
        email: "john.doe@example.com",
        password: "password123", // Ensure this is hashed in your model/middleware
        role: technicianRole._id, // Reference the 'technician' role
      },
      {
        fullName: "Emily Tran",
        email: "emily.tran@example.com",
        password: "password123",
        role: technicianRole._id,
      },
      {
        fullName: "Robert Lee",
        email: "robert.lee@example.com",
        password: "password123",
        role: technicianRole._id,
      },
    ];

    // Insert engineers into the database
    await User.insertMany(engineers);

    console.log("Engineers seeded successfully.");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding engineers:", error);
    mongoose.connection.close();
  }
};

seedEngineers();