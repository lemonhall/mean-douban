/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Img = mongoose.model('Img'),
    _ = require('underscore');


/**
 * Find Img by id
 */
exports.img = function(req, res, next, id) {
    Img.load(id, function(err, img) {
        if (err) return next(err);
        if (!img) return next(new Error('Failed to load img ' + id));
        req.img = img;
        next();
    });
};

/**
 * Create a Img
 */
exports.create = function(req, res) {
    var img = new Img(req.body);
    img.user = req.user;

    img.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                img: img
            });
        } else {
            res.jsonp(img);
            console.log(img);
        }
    });
};


/**
 * Delete an Img
 */
exports.destroy = function(req, res) {
    var img = req.img;

    img.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(img);
        }
    });
};

/**
 * Show an Img
 */
exports.show = function(req, res) {
    res.jsonp(req.img);
};

/**
 * List of Imgs
 */
exports.all = function(req, res) {

    Img.find().sort('-created').populate('user', 'name username icon').exec(function(err, imgs) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(imgs);
        }
    });
};