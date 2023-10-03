const LoginRepository = require('../database/repository/login-repository')
class LoginService {
    constructor() {
        this.repository = new LoginRepository();
    }
   
    async addUser(userInputs){
        const {username,email,password}=userInputs
        const existingUsername =await this.repository.findExistingUserName(username)
        const existingEmail=await this.repository.findExistingEmail(email)
        
        if(existingUsername.length === 0 && existingEmail.length === 0){
            const newUserSignUp= await this.repository.addUser(userInputs)
            return newUserSignUp
        }
        else{
            return "already exists"
        }
            

        
       
    }
}
module.exports=LoginService