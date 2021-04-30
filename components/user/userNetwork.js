const express = require("express");
const router = express.Router();
const controller = require("./userController");
const response = require("../../network/response");

router.post("/", (req, res) => {
  controller
    .addUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error inesperado", 500, e);
    });
});

router.get('/', (req, res) => {
    controller.listUsers().then((data ) => {
        response.success(req, res, data, 200)
    }).catch((e) => {
        response.error(req, res, 'Unexpected error', 500, e)
    })
})

module.exports = router;
