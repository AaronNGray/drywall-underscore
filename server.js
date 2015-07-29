var app = require('./app');

app.set('port', process.env.PORT || app.config.port || process.env.npm_package_config_port || 80);

try {
    var server = app.listen(app.get('port'), function() {
      console.log('Express server listening on port ' + server.address().port);
    });
}
catch (exception) {
    server.close();
}

process.on('exit', function(code) {
  console.log("process.on('exit') event");
  server.close();
});

process.on('SIGINT', function() {
  process.exit(1);
});
