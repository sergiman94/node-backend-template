const store = require("./userStore");

function addUser(name) {
  if (!name) {
    return Promise.reject("Invalid name");
  }

  const user = {
    name
  } 
  
  return store.addUser(user);
}

function listUsers() {
    return new Promise((resolve, reject) => {
        resolve(store.listUsers())
    })
}

module.exports = {
  addUser,
  listUsers
};
