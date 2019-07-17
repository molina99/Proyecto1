
exports.up = function(knex, Promise) {
    return knex.schema.withSchema('gyba')
    .createTable( 'congreso', function( t ) {
        t.increments('id');
        t.string('nombre').notNullable();
        t.string('direccion').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.withSchema('gyba')
    .dropTableIfExists( 'congreso');
};