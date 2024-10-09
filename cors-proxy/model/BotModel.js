const mongoose = require('mongoose');

const botSchema = new mongoose.Schema({}, { strict: false });

const Bot = mongoose.model('bot', botSchema);

module.exports = Bot;
