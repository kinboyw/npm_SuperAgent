 var Request = require('superagent');

 Request
     .get('https://api.douban.com/v2/user/nana')
     .then(function(res) {
         // res.body, res.headers, res.status
         console.log(res);
     })
     .catch(function(err) {
         // err.message, err.response
         console.log(err);
     });