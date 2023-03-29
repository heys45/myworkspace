var express = require('express');
const { Client } = require("@notionhq/client");

secret_key = 'secret_r4N0Pq1E7Ufyd1h8FYnfmIgOd52nyRzv9d2Mpzde79g' //☆
db_id = '813a89bf93a6492ab373b95f4dc5726' //☆

var router = express.Router();
const notion = new Client({
  auth: secret_key,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  notion.databases.query({
    database_id: db_id,
  }).then(resp=>{

    const values = [];
    for(var n in resp.results) {
      var item = resp.results[n].properties;
      try {
        var val = [
          item['名前'].title[0].plain_text,
          item['国語'].number,
          item['数学'].number,
          item['英語'].number,
          item['生年月日'].date.start
        ];
        values.push(val);
      } catch(e) {
        console.error(e);
      }
    }
    res.render('index', { title: 'Express', data: values });    
  });
});

module.exports = router;
