
const store = require('./messageStore')

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {

        if (!chat || !user || !message) {
            console.error('[Message Controller] DATOS NO VALIDOS')
            reject('Datos Incorrectos')
            return false;
        }

        let fileUrl = ''
        if (file) {
            fileUrl = 'http://localhost:3000/app/files/' + file.filename
        }

        const fullMessage = {
            chat: chat, 
            user: user,
            message: message,
            date: new Date(), 
            file: fileUrl
        }

        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
    })
}

function updateMessage(id, message) {
    return new Promise( async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data')
            return false
        }
        const result = await store.updateMessage(id, message)
        resolve(result)
    })
}

function deleteMessage(id) {
    return new Promise ((resolve, reject) => {
        if (!id) {
            reject('ID invalido')
        }

        store.deleteMessage(id).then(() => {
            resolve()
        }).catch(() => {
            reject(e)
        })
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage, 
    deleteMessage
}