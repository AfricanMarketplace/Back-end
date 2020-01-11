const db = require("../../data/db-config.js");



const getlocations =(Lid)=>{
    return db('africa')
    .select('*')
    .from('location')
    .where("user_id", Lid)
}

const getItems = (Uid)=>{
    return db('africa')
    .select('i.id', 'i.name', 'i.description', 'i.price')
    .from('item as i')
    .where('user_id',Uid )
}

const getAllusers = ()=>{
    return db('africa')
    .select("id","username")
    .from('users')
    .orderBy('id', "desc")
    .then(async(list)=>{
        return Promise.all(list.map(async(user)=>{
            const yeet = await getlocations(user.id)
            const TheItems = await getItems(user.id)
            return {...user, locations:yeet, items:TheItems}
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
        const Theitems = await getItems(user.id)
        return {...user, locations: yate, items: Theitems}
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