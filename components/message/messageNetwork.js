const express = require('express')
const multer = require('multer')
const router = express.Router()
const controller = require('./messageController')
const response = require('../../network/response')

const upload = multer({
    dest: 'public/files'
})

router.post('/', upload.single('file'),(req, res) => {
   controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file).then((data) => {
    response.success(req, res, data, 200)
   }).catch((e)=>{
    response.error(req, res, 'Informacion invalida', 500, e)
   })
})

router.get('/', (req, res) => {
    const filterMessages = req.query.user || null
    controller.getMessages(filterMessages).then((data) => {
        response.success(req, res, data, 200)
    }).catch((e) => {
        response.error(req, res, 'No se pudieron recuperar los datos', 500, e)
    })
})

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message).then((data) => {
        response.success(req, res, data, 200)
    }).catch((e) => {
        response.error(req, res, 'Error Interno', 500, e)
    })
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id).then(() => {
        response.success(req,  res, `Usuario ${req.params.id} exitosamente elimindao`, 200)
    }).catch((e) => {
        response.error(req, res, 'Error insesperado', 500, e)
    })
})



module.exports = router