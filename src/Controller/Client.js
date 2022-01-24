const edit = require('./User/edit-user').edit,
people = require('./User/get-users').people,
user = require('./User/get-user').user,
addUser = require('./User/post-user').addUser,
removeUser = require('./User/remove-user').removeUser;

module.exports = {
    people,
    user,
    addUser,
    removeUser,
    edit
}; 