const LoginService = require("../service/login-services")
module.exports = async (app) => {
    const service = new LoginService()
    app. post('/signup', async (req, res, next) => {
        const { username, password, email } = req.body
       
        const addNewUser=await service.addUser({username,email,password})
        res.send({
            success: addNewUser
        })
    })
}