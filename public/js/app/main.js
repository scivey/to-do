// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var Todo, TodoCollection, TodoCompositeView, TodoItemView, app, todoApp, todoView, todos;
    todoApp = window.todoApp;
    app = new Backbone.Marionette.Application();
    todoApp.app = app;
    app.addRegions({
      "main": "#todo-wrapper"
    });
    Todo = todoApp.Todo, TodoCollection = todoApp.TodoCollection, TodoItemView = todoApp.TodoItemView, TodoCompositeView = todoApp.TodoCompositeView;
    todos = new TodoCollection();
    todoView = new TodoCompositeView({
      collection: todos
    });
    return app.getRegion("main").show(todoView);
  });

}).call(this);