const db = require( "../data/db-config" );

const find = () => db( "tasks as t" )
                    .join( "projects as p", "t.project_id", "p.id" )
                    .select( "t.id", "t.project_id", "p.name", "p.description as project_description", "t.description as tasks_description", "t.notes" );

const findById = id => db( "tasks as t" )
                        .join( "projects as p", "t.project_id", "p.id" )
                        .where( "t.project_id", id )
                        .select( "t.id", "t.project_id", "p.name", "p.description as project_description", "t.description as tasks_description", "t.notes" );

const add = record => db( "tasks" ).insert( record, "id" ).then( response => findById( response[ 0 ] ) )

module.exports = {
  find,
  findById,
  add
};