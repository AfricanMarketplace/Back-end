const db = require("../../data/db-config.js")

const UserModel = require("../user/user-Model.js")



const addUser=(person)=>{

    return db('users')
    .insert(person, "id")
        
}

const Login = (user)=>{
    return db
    .select("username", "password", "id")
    .from('users')
    .where({username:user.username})
    .first()
    .then(async(user)=>{
       const format=await UserModel.getUser(user.id)
       
       user = {...user, nice:format}
       
       return user;
    })
}


module.exports={
    addUser,
    Login
}