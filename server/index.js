var cors = require(`cors`)
var axios = require(`axios`);
var express = require('express'); 
var app = express();
app.use(cors())
app.get('/', async function (req, res) {
    var data = await axios.get("https://data.primariatm.ro/api/3/action/datastore_search?resource_id=d0134630-84d9-40b8-9bcb-dfdc926d66ab&limit=100");
  res.send(data.data.result.records);
});
app.listen(8080, function () {
  console.log('Running on port 8080!')
});