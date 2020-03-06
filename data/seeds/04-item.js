exports.seed = function(knex) {
  // Inserts seed entries
  return knex('item').insert([
    { name: 'Beef', description: "Tasty meat", price: 30.25, user_id:1,category_id:1, location_id:1},
    { name: 'Scale', description: "measures up to a mg", price: 60.25, user_id:2,category_id:2, location_id:2 },
    { name: 'Curtains', description: "Nice looking things", price: 40.25, user_id:3,category_id:3, location_id:3 }
  ]);
};
