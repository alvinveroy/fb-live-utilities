var express = require('../node_modules/express');
var bodyParser = require('../node_modules/body-parser');
var path = require('../node_modules/path')
var EventSource = require('../node_modules/eventsource');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'views')))

app.post('/myaction', function (req, res) {
    res.render('myaction.ejs', { uac: req.body.uac, vid:req.body.vid });
});

app.listen(8080, function () {
    console.log('Server running at http://127.0.0.1:8080/');
});


// res.writeHead(200, {
//     'Content-Type': 'text/html',
//     'Cache-Control': 'no-cache',
//     'Connection': 'keep-alive'
// }); // create an HTTP header to keep connection alive and streaming.

// var source = new EventSource(`https://streaming-graph.facebook.com/${req.body.vid}/live_comments?access_token=${req.body.uac}&comment_rate=one_per_two_seconds&fields=from{name,id},message`);

// source.onmessage = function (event) {
//     console.log(event);
//     var event = JSON.parse(event.data);
//     var profilePicture = `https://graph.facebook.com/${event.from.id}/picture?type=square`;
//     res.write(`<p><img src="${profilePicture}"> ${event.from.name}: ${event.message}</p><br>`);
// };