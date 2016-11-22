var express = require('express');
var router = express.Router();

const axios = require('axios');

const { API_KEY, BASE_URL } = require('../configs/api_config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res){

  let { company, startdate, enddate } = req.query;
  let fullUrl = `${BASE_URL}${company}.json?api_key=${API_KEY}&start_date=${startdate}&end_date=${enddate}`;

  axios.get(fullUrl).then(resp => {

    let { dataset_code, name, data } = resp.data.dataset;

    let stockData = data.map(stock => {
      return {
        date: stock[0],
        price: stock[1]
      }
    });

    let retObj = {
      dataset_code,
      name,
      stockData
    };
    res.json(retObj);
  }).catch(err => {
    res.status(500).send({ error: 'Something failed!' })
  })
});

module.exports = router;
