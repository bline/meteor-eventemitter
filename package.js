Package.describe({
  summary: "Evented JavaScript for the browser"
});

Package.on_use(function (api) {
  path = Npm.require('path')
  api.add_files([
    path.join('EventEmitter', 'EventEmitter.js')
  ], 'client');
  api.export('EventEmitter');
});

