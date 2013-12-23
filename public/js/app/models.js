// Generated by CoffeeScript 1.6.3
(function() {
  var Todo, TodoCollection, todoApp;

  if (window.todoApp == null) {
    window.todoApp = {};
  }

  todoApp = window.todoApp;

  Todo = Backbone.Model.extend({
    defaults: function() {
      var _defaults;
      _defaults = {
        completed: false,
        body: "A to-do item."
      };
      return _defaults;
    }
  });

  TodoCollection = Backbone.Collection.extend({
    model: Todo
  });

  todoApp.Todo = Todo;

  todoApp.TodoCollection = TodoCollection;

}).call(this);
