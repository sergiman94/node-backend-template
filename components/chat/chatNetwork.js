const express = require('express')
const router = express.Router()
const controller = require('./chatController')
const response = require('../../network/response')

router.post('/', (req, res) => {
    controller.addChat(req.body.users).then((data) => {
        response.success(req, res, data, 200)
    }).catch((e) => {
        response.error(req, res, 'Unexpected error', 500, e)
    })
})

router.get('/:userId', (req, res) => {
    controller.listChats(req.params.userId).then((data) => {
        response.success(req, res, data, 200)
    }).catch((e) => {
        response.error(req, res, 'Unexpected error', 500, e)
    })
})


module.exports = router


