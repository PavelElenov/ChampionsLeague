const {Schema, model} = require('mongoose');

//create collection schema
const schema = new Schema({
    name: {type:String, require: true},
    position:{type:String, require: true},
    imgUrl:{type:String, require:true},
    team: {type:String, ref:"Team"},
});

//create collection Player
const Player = model('Player', schema);

//
module.exports = Player;