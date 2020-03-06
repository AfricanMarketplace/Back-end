exports.seed = function(knex) {
      // Inserts seed entries
      return knex('location').insert([
        { name: 'Chad', user_id:1},
        { name: 'Ethiopia', user_id:2},
        { name: 'Gahna', user_id:3}
      ]);
};
