const Model = require('./userModel')

function addUser(user) {
    const myUser = new Model(user)
    return myUser.save()
}

function listUsers() {
    return Model.find()
}

module.exports = {
    addUser: addUser,
    listUsers: listUsers
}