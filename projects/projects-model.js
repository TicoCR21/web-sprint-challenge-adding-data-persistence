const db = require( "../data/db-config" );
const tableName = "projects";

const find = () => db( tableName );

const findById = id => db( tableName ).where( { id } ).first();

const add = record => db( tableName ).insert( record, "id" ).then( response => findById( response[ 0 ] ) );

const findProjectResources = id => db( "projects as p" )
                                    .join( "project_resources as pr", "p.id", "pr.project_id" )
                                    .join( "resources as r", "r.id", "pr.resource_id" )
                                    .where( "p.id", id )
                                    .select( "p.id as projects_id", "p.name as project_name", "p.description as projet_description", "p.completed", "r.id as resources_id", "r.name as resources_name", "r.description as resource_description" ); 

const findProjectTasks = id => db( "projects as p" )
                                .join( "tasks as t", "p.id", "t.project_id" )
                                .where( "p.id", id ); 

module.exports = {
  find,
  findById,
  add,
  findProjectTasks,
  findProjectResources
};