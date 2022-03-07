const {Role} = require('../models');

module.exports.renderRegistrationForm = async function(req, res){
    const roles = await Role.findAll();
    res.render('users/register', {
        roles
    });
}