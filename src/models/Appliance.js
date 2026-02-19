const mongoose = require('mongoose');

const ApplianceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: String,
  model: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Appliance', ApplianceSchema);
