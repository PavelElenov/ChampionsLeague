const {Schema, model} = require('mongoose');

//create Team schema
const schema = new Schema({
    name: {type:String, required:true,},
    group: {type: String, required: true},
    matches: {type: Number, required: true,},
    wons: {type:Number, required: true},
    losts: {type:Number, required: true},
    draws: {type:Number, required: true},
    points: {type:Number, required: true},
    rank:{type:Number, required: true},
    goalDifference: {type:Number, required: true},
    goalScored: {type:Number, required: true},
    goalConceded:{type:Number, required: true},
    players: {type: [String], default:[], ref: 'Player'},
});


//create collection Team
const Team = model('Team', schema);

module.exports = Team;