const db = require( "../data/db-config" );

const find = () => db( "projects" );

const findById = id => db( "projects" ).where( { id } ).first();

const add = record => db( "projects" )
                        .insert( record, "id" )
                        .then( response => findById( response[ 0 ] ) );

module.exports = { find, findById, add };