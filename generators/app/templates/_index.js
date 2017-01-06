var express = require( 'express' );
var app = express();

var port = process.env.PORT || 3001;

app.use( express.static( './src' ) );

app.listen( port, function() {
  console.log( 'express listening on ' + port );
} )
