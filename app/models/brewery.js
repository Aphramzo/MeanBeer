var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var BrewerySchema = new Schema({
    name : String,
    location : String,
    visited : Boolean

});

BrewerySchema.path('name').validate(function(name) {
    return name.length > 0;
}, 'A Brewery must have a name');

mongoose.model('Brewery', BrewerySchema);