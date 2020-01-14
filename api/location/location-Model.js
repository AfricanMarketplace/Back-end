const db = require("../../data/db-config.js");

const getuser = (Uid)=>{
    return db ('africa')
    .select('id', 'username')
    .from('users')
    .where('id', Uid)
    .first()
}

const getItems = (Uid)=>{
    return db ('africa')
    .select('i.id', 'i.name', 'i.description', 'i.price')
    .from('location as l')
    .join('users as u', 'l.user_id', 'u.id')
    .join('item as i', 'u.id', 'i.user_id')
    .where('u.id', Uid)
}

const getAll = ()=>{
    return db ('africa')
    .select("*")
    .from('location')
    .then(async(list)=>{
        return Promise.all(list.map(async(item)=>{
            const TheUser = await getuser(item.user_id)
            const Theitems = await getItems(item.user_id)

            return {...item, user: TheUser, items: Theitems}
        }))
    })
}

const getbyId = (id)=>{
    return db ('africa')
    .select("*")
    .from('location')
    .where('id', id)
    .first()
    .then(async(loc)=>{
        const Theuser = await getuser(loc.user_id)
        const Theitems = await getItems(loc.user_id)

        return {...loc, user: Theuser, items: Theitems }
    })
}

const addLocation = (body)=>{
    return db ('location')
    .insert(body, 'id')
    .then(id=>{
        return id[0]
    })
}

const editLocation = (id, body)=>{
    return db ('location')
    .where('id', id)
    .update(body, 'id')
}

const deleteLocation = (id)=>{
    return db ('location')
    .where('id', id)
    .del()
}

module.exports={
    getAll,
    getbyId,
    addLocation,
    editLocation,
    deleteLocation

}