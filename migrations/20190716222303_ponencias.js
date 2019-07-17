
exports.up = function(knex, Promise) {
    return knex.schema.withSchema('gyba')
    .createTable( 'ponencias', function( t ) {
        t.increments('id');
        t.string('tema').notNullable();
        t.integer('idPonente').notNullable();
        t.integer('idCongreso').notNullable();
        t.integer('idAsistente').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.withSchema('gyba')
    .dropTableIfExists( 'ponencias');
};