'use strict';

var mongoose = require('mongoose'),
  Crime = mongoose.model('Crimes');

exports.list_all_crimes = function(req, res) {
  Crime.find({}, function(err, crime) {
    if (err)
      res.send(err);
    res.json(crime);
  });
};

exports.create_a_crime = function(req, res) {
  var new_crime = new Crime(req.body);
  new_crime.save(function(err, crime) {
    if (err)
      res.send(err);
    res.json(crime);
  });
};


exports.read_a_crime = function(req, res) {
  Crime.findById(req.params.crimeId, function(err, crime) {
    if (err)
      res.send(err);
    res.json(crime);
  });
};


exports.update_a_crime = function(req, res) {
  Crime.findOneAndUpdate({_id: req.params.crimeId}, req.body, {new: true}, function(err, crime) {
    if (err)
      res.send(err);
    res.json(crime);
  });
};


exports.delete_a_crime = function(req, res) {
  Crime.remove({
    _id: req.params.crimeId
  }, function(err, crime) {
    if (err)
      res.send(err);
    res.json({ message: 'Crime successfully deleted' });
  });
};