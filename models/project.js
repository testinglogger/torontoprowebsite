const mongoose = require('mongoose');
const projectSchema  = new mongoose.Schema({
    client_name :{
        type  : String,
        required : true
    } ,
    hours :{
        type  : Number,
        required : true
    } ,
    day :{
        type  : String,
        required : true
    } ,
    user_id :{
        type  : String,
        required : true
}
});
const Project = mongoose.model('project',projectSchema);

module.exports = Project;