var mongoose = require('mongoose'),
    Brewery = mongoose.model('Brewery');

exports.list = function(req, res) {
    Brewery.find(
        {},
        function(err, breweries) {
            if (!err){
                console.log(breweries);
                //process.exit();
            }
            else { throw err;}

        }
    );
    res.render('breweries/list', {

    });
};

exports.create = function(req, res) {
    //var brewery = new Brewery(req.body);

    //brewery.save();
    //res.jsonp(brewery);
};

exports.createProcess = function(req, res) {

};