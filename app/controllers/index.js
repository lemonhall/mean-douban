/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    _ = require('underscore');
var cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'dlfu5hzg3', 
  api_key: '232118153483713', 
  api_secret: 'IxMEJaq3AN6cX498RoUq1xfKqRI' 
});


exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : "null",
        cloudinary: cloudinary
    });
};