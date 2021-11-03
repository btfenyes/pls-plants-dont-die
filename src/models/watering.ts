import { Schema, model } from 'mongoose';

const wateringSchema = new Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  plant: {
    type: Schema.Types.ObjectId,
    ref: 'Plant',
    required: true,
  }
});

export default model('Watering', wateringSchema);