var requestProxy = require('express-request-proxy'),
    express = require('express'),
    port = process.env.PORT || 3000,
    app = express();


app.use(express.static('./'));

app.get('*', function(req, res) {
  res.sendFile('index.html', { root: '.'});
});

app.listen(port);
