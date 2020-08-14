const db = require( "../data/db-config" );

const tableName = "resources";

const find = () => db( tableName );

const findById = id => db( tableName ).where( { id } ).first();

const findProjectsPerResource = id => db( "resources as r" )
                                        .join( "project_resources as pr", "r.id", "pr.resource_id" )
                                        .join( "projects as p", "p.id", "pr.project_id" )
                                        .where( "r.id", id )
                                        .select( "r.name", "p.name" );

const add = record => db( tableName ).insert( record, "id" ).then( response => findById( response[ 0 ] ) )

module.exports = {
  find,
  findById,
  add,
  findProjectsPerResource
};