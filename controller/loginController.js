const { check, validationResult } = require('express-validator/check');
var models = require ('../models');
var Op = models.Sequelize.Op;

exports.login = [check('username').isLength({min : 1, max:20}), 
check('password').isLength({ min: 4, max: 20 }).trim(),
(req, res ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // There are errors. Render form again with sanitized values/errors messages.
        // Error messages can be returned in an array using `errors.array()`.
        res.json({ errors: errors.array() });
        }

        models.user.findOne({
            where: {
              username : req.body.username,
              password : req.body.password
              }}
         ).then(result => {
           var results = result;
           if(results != null){
             res.json({"name" : result.username})
           }
           else{
            res.json("kosong");
           }
         });
}];

    
