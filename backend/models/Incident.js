const mongoose = require('mongoose');
const { Schema } = mongoose;


const IncidentImageSchema = new Schema({
  image_url: { type: String, required: true },
  uploader_id: { type: Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['before', 'during', 'after'], default: 'before' },
  description: { type: String }
}, { _id: false, timestamps: { createdAt: 'uploaded_at' } });

const IncidentUpdateSchema = new Schema({
  updater_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  update_time: { type: Date, default: Date.now },
  status_from: { type: String }, 
  status_to: { type: String, required: true }, // Trạng thái mới
  note: { type: String },
  visible_to_citizen: { type: Boolean, default: true }
}, { _id: false });

const IncidentAssignmentSchema = new Schema({
  engineer_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  assigned_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  assigned_at: { type: Date, default: Date.now },
  note: { type: String }
}, { _id: false });

const IncidentRatingSchema = new Schema({
  rater_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String },
  created_at: { type: Date, default: Date.now }
}, { _id: false });



const incidentSchema = new Schema({

  reporter_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  type_id: {
    type: Schema.Types.ObjectId,
    ref: 'IncidentType',
    required: true
  },
  assigned_engineer_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null,
    index: true
  },

  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  status: {
    type: String,
    required: true,
    enum: ['reported', 'assigned', 'in_progress', 'completed'],
    default: 'reported'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  address: { type: String, required: true },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },


  images: [IncidentImageSchema],
  updates: [IncidentUpdateSchema],
  assignments: [IncidentAssignmentSchema], 
  rating: IncidentRatingSchema 

}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});


incidentSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Incident', incidentSchema);