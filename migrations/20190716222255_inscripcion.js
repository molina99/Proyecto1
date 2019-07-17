
exports.up = function(knex, Promise) {
    return knex.schema.withSchema('gyba')
    .createTable( 'inscripcion', function( t ) {
        t.increments('id');
        t.integer('idAsistente').notNullable();
        t.integer('idPonente').notNullable();
        t.integer('idCongreso').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.withSchema('gyba')
    .dropTableIfExists( 'inscripcion');
};