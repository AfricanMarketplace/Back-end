const db = require("../../data/db-config.js");

const UserModel = require("../user/user-Model.js");




const addUser=(person)=>{

    return db('users')
    .insert(person, "id")
        
}

const getItemsFrom = (Uid)=>{
    return db ('africa')
    .select('i.id', 'i.name','i.description', 'i.price')
    .from('users')
    .join('item as i', 'users.id', 'i.user_id')
    .where('users.id', Uid)
}

const getLocations = (Uid)=>{
    return db ('africa')
    .select('id', 'name')
    .from('location')
    .where('user_id', Uid)
}

const Login = (user)=>{
    return db
    .select("username", "password", "id")
    .from('users')
    .where({username:user.username})
    .first()
    .then(async(user)=>{
       var format = await UserModel.getUser(user.id)
       const AllLocations = await getLocations(user.id)

       format = {...format, locations: AllLocations }
       user = {...user, nice:format}
       return user;
    })
}


module.exports={
    addUser,
    Login
}