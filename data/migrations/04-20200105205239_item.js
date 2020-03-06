
exports.up = function(knex) {
  return knex.schema.createTable('item', tbl=>{
      tbl.increments();

      tbl.string('name', 200)
      .notNullable();

      tbl.text('description')
      .nullable();

      tbl.decimal('price')
      .notNullable()

      //foreign keys

      tbl.integer('user_id')
        .unsigned()
        .references("id")
        .inTable("users")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");


      tbl.integer('category_id')
        .unsigned()
        .references("id")
        .inTable("category")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl.integer('location_id')
      .unsigned()
      .references("id")
      .inTable("location")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");


  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('item')
};
