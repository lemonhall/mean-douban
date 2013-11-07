/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Img Schema
 */
var ImgsSchema = new Schema({
    bytes:{
        type:Number,
        default:0
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    format:{
        type:String,
        default:"jpg"
    },
    height:{
        type:Number,
        default:640
    },
    width:{
        type:Number,
        default:480
    },
    path:{
        type:String,
        default:""
    },
    public_id:{
        type:String,
        default:""
    },
    url:{
        type:String,
        default:""
    },
    secure_url:{
        type:String,
        default:""
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Statics
 */
ImgsSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('Img', ImgsSchema);