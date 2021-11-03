import { Schema, model } from 'mongoose';

const plantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  wateringIntervalDays: {
    type: Number,
    required: true,
  },
  species: {
    type: String,
  },
  waterings: [{
    type: Schema.Types.ObjectId,
    ref: 'Watering',
  }]
});

export default model('Plant', plantSchema);