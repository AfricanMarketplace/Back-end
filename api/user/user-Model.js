const db = require("../../data/db-config.js");

const getItems = (Lid)=>{
    return db('africa')
    .select('i.id', 'i.name', 'i.description', 'i.price')
    .from('item as i')
    .where('location_id',Lid )
    .orderBy("i.id")
}

//reserved for function below. Acts as a sub query to be ran on each location to get their item
const getItemCount = (Lid)=>{
    return db('location')
    .count('item.name as count')
    .from('location')
    .join('item', 'location.id', 'item.location_id')
    .where('location.id', Lid)
    .first()
}

const getlocations =(Uid)=>{

    return db('africa')
    .select('id', 'name', 'user_id')
    .from('location')
    .where("user_id", Uid)
    .orderBy('id')
    .then(async(list)=>{
        return Promise.all(list.map(async(loc)=>{
            const yate = await getItemCount(loc.id)
            return {...loc, itemCount:yate.count}
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