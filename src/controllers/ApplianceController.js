const Appliance = require('../models/Appliance');

module.exports = {
  async index(req, res) {
    const appliances = await Appliance.find();
    return res.json(appliances);
  },

  async store(req, res) {
    const { name, brand, model } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    const appliance = await Appliance.create({ name, brand, model });
    return res.json(appliance);
  },

  async delete(req, res) {
    const { id } = req.params;
    const appliance = await Appliance.findById(id);
    if (!appliance) {
      return res.status(404).json({ error: 'Appliance not found' });
    }
    await appliance.remove();
    return res.json({ message: 'Appliance deleted' });
  }
};
