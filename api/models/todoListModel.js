'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CrimeSchema = new Schema({
  category: {
    type: String,
    enum: ['people', 'vehicle', 'residence'],
    required: 'Please enter a crime category'
  },
  location: {
    type: [{
      type: Number
    }],
    required: 'Please provide a valid location'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Crimes', CrimeSchema);