
exports.up = function(knex, Promise) {
    return knex.schema.withSchema('gyba')
    .createTable( 'cronograma', function( t ) {
        t.increments('id');
        t.string('temaPonencia').notNullable();
        t.date('fecha').notNullable();
        t.time('hora').notNullable();
        t.string('autor').notNullable();
        t.integer('idCongreso').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.withSchema('gyba')
    .dropTableIfExists( 'cronograma');
};