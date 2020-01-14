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
    .select('id','name', 'description', 'price', 'user_id', "category_id")
    .from('item')
    .orderBy('id')
    .then(async(list)=>{
        return Promise.all(list.map(async(item)=>{
            const yeet = await getusers(item.user_id)
            const yate = await getCategory(item.category_id)

            return {...item, user: yeet, category: yate}
        }))
    })
}

const getById = (id)=>{
    return db ('africa')
    .select('id','name', 'description', 'price', 'user_id', "category_id")
    .from('item')
    .where("item.id", id)
    .first()
    .then(async(item)=>{
        const yeet = await getusers(item.user_id)
        const yate = await getCategory(item.category_id)

        return {...item, user: yeet, category: yate}
    })
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