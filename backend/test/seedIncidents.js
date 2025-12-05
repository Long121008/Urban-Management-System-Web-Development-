const mongoose = require('mongoose');
const Incident = require('../models/Incident'); // Adjust the path to your Incident model

const insertIncident = async () => {
  try {
   const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/react-auth';
       await mongoose.connect(mongoURI, {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });

    const incident = new Incident({
      title: "Pothole on Main Street",
      description: "Large pothole causing traffic issues.",
      status: "reported",
      priority: "high",
      address: "123 Main St",
      location: {
        type: "Point",
        coordinates: [105.801, 20.998]
      },
      reporter_id: "64a03b5ecca9835861a6aee9", // Replace with a valid User ID
      type_id: "64a03b5ecca9835861a6aee5", // Replace with a valid IncidentType ID
      assigned_engineer_id: "64a03b5ecca9835861a6aeed", // Replace with a valid Team ID
      images: [
        {
          image_url: "https://example.com/image1.jpg",
          uploader_id: "64a03b5ecca9835861a6aee9", // Replace with a valid User ID
          type: "before",
          description: "Initial image of the pothole"
        }
      ],
      updates: [
        {
          updater_id: "64a03b5ecca9835861a6aee9", // Replace with a valid User ID
          status_from: "reported",
          status_to: "assigned",
          note: "Assigned to the road maintenance team.",
          visible_to_citizen: true
        }
      ],
      assignments: [
        {
          engineer_id: "64a03b5ecca9835861a6aeed", // Replace with a valid Team ID
          assigned_by: "64a03b5ecca9835861a6aee9", // Replace with a valid User ID
          note: "Assigned to handle the pothole issue."
        }
      ],
      rating: {
        rater_id: "64a03b5ecca9835861a6aee9", // Replace with a valid User ID
        rating: 5,
        comment: "Quick and efficient repair!"
      }
    });

    await incident.save();
    console.log('Incident inserted successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error inserting incident:', err);
    mongoose.connection.close();
  }
};

insertIncident();