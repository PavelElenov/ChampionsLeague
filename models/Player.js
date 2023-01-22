const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {type:String, require: true},
    position:{type:String, require: true},
    imgUrl:{type:String, require:true},
    team: {type:String, ref:"Team"},
});

const Player = model('Player', schema);

module.exports = Player;