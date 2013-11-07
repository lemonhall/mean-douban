/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Shuo = mongoose.model('Shuo'),
    _ = require('underscore');


/**
 * Find shuo by id
 */
exports.shuo = function(req, res, next, id) {
    Shuo.load(id, function(err, shuo) {
        if (err) return next(err);
        if (!shuo) return next(new Error('Failed to load shuo ' + id));
        req.shuo = shuo;
        next();
    });
};

/**
 * Create a shuo
 */
exports.create = function(req, res) {

    var content= req.body.content;
    var shuo = new Shuo({content:content});

    shuo.user = req.user;
    if(req.body.img){
        console.log("I am in tur...");
        shuo.img  = req.body.img._id;
    }
        console.log(req.user);
        console.log(req.body);
        console.log(shuo);

    shuo.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                shuo: shuo
            });
        } else {
            res.jsonp(shuo);
            
        }
    });
};


/**
 * Delete an shuo
 */
exports.destroy = function(req, res) {
    var shuo = req.shuo;

    shuo.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(shuo);
        }
    });
};

/**
 * Show an shuo
 */
exports.show = function(req, res) {
    res.jsonp(req.shuo);
};

/**
 * List of shuos
 */
exports.all = function(req, res) {

    Shuo.find().sort('-created').populate('user', 'name username icon').populate('img', 'format url width height').exec(function(err, shuos) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(shuos);
        }
    });
};