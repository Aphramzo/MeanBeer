var mongoose = require('mongoose'),
    Brewery = mongoose.model('Brewery');

exports.list = function(req, res) {
    var breweryList = Brewery.find().sort('name').exec(
        function(err, breweries) {
            if (!err){
                res.render('breweries/list',{
                    breweryList: breweries
                });
            }
            else { throw err;}

        }
    );
};

exports.create = function(req, res) {
    res.render('breweries/add', {
        title: 'New Brewery',
        brewery: new Brewery()
    });
};

exports.createProcess = function(req, res){
    console.log('IN the process');
    var brewery = new Brewery(req.body);

    brewery.save(function(err) {
        if (err) {
            console.log ('Error Creating Brewery: ' + err);
        }
        console.log('Created Brewery!');
    });
    res.redirect('/breweries');
};