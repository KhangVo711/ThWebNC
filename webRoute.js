import express from 'express'
import main from './controller/HomeController.js'
import about from './controller/AboutController.js'
import contact from './controller/ContactController.js'
import auth from './controller/AuthController.js'

const router = express.Router()
const webRouter = (app) => {
    router.get('/*', main.getHome)
    router.get('/', main.getMain)
    router.post('/', main.getMain)
    router.delete('/delete-user/:username', main.getMain)
    router.get('/about', about.getAbout)
    router.get('/contact', contact.getContact)

    // API
    router.post('/login', auth.loginUser);
    router.post('/register', auth.registerUser);


    return app.use('/', router)
}
export default webRouter