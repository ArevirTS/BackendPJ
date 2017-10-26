'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/crimes')
    .get(todoList.list_all_crimes)
    .post(todoList.create_a_crime);

  app.route('/crimes/:crimeId')
    .get(todoList.read_a_crime)
    .put(todoList.update_a_crime)
    .delete(todoList.delete_a_crime);
};