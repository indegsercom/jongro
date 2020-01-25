
exports.up = function(knex) {
  return knex.schema.createTable('account', t => {
    t.text('id').primary()
    t.text('cover_url')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('account')
};
