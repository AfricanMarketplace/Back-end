const db = require("../../data/db-config.js");

const getItems = (Lid)=>{
    return db('africa')
    .select('i.id', 'i.name', 'i.description', 'i.price')
    .from('item as i')
    .where('location_id',Lid )
    .orderBy("i.id")
}

const getlocations =(Lid)=>{
    return db('africa')
    .select('*')
    .from('location')
    .where("user_id", Lid)
    .orderBy('id')
    .then(async (list)=>{
        return Promise.all(list.map(async(location)=>{
            const TheItems = await getItems(location.id)
            return {...location, items:TheItems}
        })) 
    })
}


const getAllusers = ()=>{
    return db('africa')
    .select("id","username")
    .from('users')
    .orderBy('id')
    .then(async(list)=>{
        return Promise.all(list.map(async(user)=>{
            const yeet = await getlocations(user.id)
            return {...user, locations:yeet}
        })) 
    })
}

const getUser = (id)=>{
    return db('africa')
    .select('id','username')
    .from('users')
    .where("id", id)
    .first()
    .then(async(user)=>{
        const yate = await getlocations(user.id)
        return {...user, locations: yate}
    })
}


const deleteUser = (id)=>{
    return db ('users')
    .where("id", id)
    .del()
}

const editUser = (id, body)=>{
    return db ('users')
    .where("id", id)
    .update(body, "id")
}

module.exports={
    getAllusers,
    getUser,
    deleteUser,
    editUser
}