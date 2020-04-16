const db = require('../../data/db-config.js')

const getusers = (Uid)=>{
    return db ('africa')
    .select("id","username")
    .from("users")
    .where("id", Uid)
    .first()
}

const getCategory = (Cid)=>{
    return db ("africa")
    .select("*")
    .from("category")
    .where("id", Cid)
    .first()
}

const getAll = ()=>{
    return db ('africa')
    .select('item.id','item.name', 'description', 'price', 'item.user_id', "category_id", "location_id", "u.username as owner", "c.name as category", "l.name as location")
    .from('item')
    .orderBy('id')
    .join("users as u", "item.user_id", "u.id")
    .join("category as c", "item.category_id", "c.id")
    .join("location as l", "item.location_id", "l.id")

}

const getById = (Uid)=>{
    return db ('africa')
    .select('item.id','item.name', 'description', 'price', 'item.user_id', "category_id", "location_id")
    .from('item')
    .orderBy('id')
    .join("users as u", "item.user_id", "u.id")
    .join("category as c", "item.category_id", "c.id")
    .join("location as l", "item.location_id", "l.id")
    .where("item.user_id", Uid)

}

const addItem = (body)=>{
    return db ('item')
    .insert(body, "id")
    .then(id=>{
        return id[0]
    })
}

const editItem = (id, body)=>{
    return db ('item')
    .where("id", id)
    .update(body, "id")
}

const deleteItem = (id)=>{
    return db ('item')
    .where("id", id)
    .del()

}

module.exports={

    getAll,
    getById,
    addItem,
    editItem,
    deleteItem

}