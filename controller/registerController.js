const { check, validationResult } = require('express-validator/check');
var models = require ('../models');
var Op = models.Sequelize.Op;
/*exports.userget = function(req, res) {
  models.User.findAll().then(user => {
  res.json(user)
});
};*/

// Bagian Register
exports.register = [check('username', 'username harus diisi').isLength({ min: 1, max: 20 }),
check('name', 'username harus diisi').isLength({ min: 1, max: 50 }),
check('email',).isEmail ({require_display_name: false }),
check('password').isLength({ min: 4, max: 20 }).trim(),
check('passwordconfirmation').isLength({ min: 4, max: 20 }).trim(),
 (req, res) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // There are errors. Render form again with sanitized values/errors messages.
        // Error messages can be returned in an array using `errors.array()`.
        res.json({ errors: errors.array() });
        }


        models.user.findOne({
          where : {
          [Op.or]: [{username : req.body.username},
         {email : req.body.email } ]}}
       ).then(result => {
         var results = result;
         //res.send(results);
         if(results == 0){
          models.user.create({
          username : req.body.username,
          name : req.body.name,
          email : req.body.email,
          password : req.body.password,
        }).then(user => {
           res.json(user.username)})
         }
         else{
          res.send("Ada");
         }
       });

        // Data from form is valid.
        //res.json(req.body)
        /*models.user.create({
        username : req.body.username,
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
      }).then(user => {
         res.json(user.username)}),
        (err) => {
        console.log ("Error")
      }*/
}];
