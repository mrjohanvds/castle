const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
    uri: 'https://www.relaischateaux.com/fr/destinations/europe/france',
    transform: function (body){
        return cheerio.load(body);
    }
};

rp(options)
    .then(function($){
        console.log($);
    })
    .catch(function(err){
        console.log(err)
    });
