const db = require("../../data/db-config.js");

const getItems = (Cid)=>{
    return db ('africa')
    .select('*')
    .from("item")
    .where("category_id", Cid)
    .orderBy('id')
}

const getAll = ()=>{
    return db ('africa')
    .select("*")
    .from('category')
    .orderBy('id')
    .then(async(list)=>{
        return Promise.all(list.map(async(cat)=>{
            const yeet = await getItems(cat.id)
            return {...cat, items: yeet}
        }))
    })
}

const getById = (id)=>{
    return db ('africa')
    .select('*')
    .from('category')
    .where("id", id)
    .first()
    .then(async(cat)=>{
        const yate = await getItems(cat.id)
        return {...cat, items: yate}
    })
}

const editCategory = (id, body)=>{
    return db('category')
    .where("id", id)
    .update(body, "id")
}

const addCategory = (body)=>{
    return db('category')
    .insert(body,'id')
}

const deleteCategory = (id)=>{
    return db ('category')
    .where('id', id)
    .del()
}

module.exports={
    getAll,
    getById,
    editCategory,
    addCategory,
    deleteCategory
}