const Login =require('../model/Login')
class LoginRepository{
    async addUser(userInputs){
        const signUpUser=await Login(userInputs)
        const signUp=await signUpUser.save()
        return signUp
    }
    async findExistingUserName(username){
      const existingUsername=await Login.find({username:username})
      return existingUsername
      
    }
    async findExistingEmail(email){
        const existingEmail=await Login.find({email:email})
        return existingEmail
    }
  
}
module.exports=LoginRepository