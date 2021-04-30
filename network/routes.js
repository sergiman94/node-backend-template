const express = require('express')
const message = require('../components/message/messageNetwork')
const user = require('../components/user/userNetwork')
const chat = require('../components/chat/chatNetwork')

const routes = function(server) {
    server.use('/message', message)
    server.use('/user', user)
    server.use('/chat', chat)
}

module.exports = routes