const changeTwitterName = require('./lib/changeTwitterName');

var countdown = setInterval(function() {
    changeTwitterName();
}, 60 * 1000); 