var cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'dlfu5hzg3', 
  api_key: '232118153483713', 
  api_secret: 'IxMEJaq3AN6cX498RoUq1xfKqRI' 
});

/**
 * List of shuos
 */
exports.index = function(req, res) {

		res.render("upload",{cloudinary: cloudinary});
};

