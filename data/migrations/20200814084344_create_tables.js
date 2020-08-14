exports.up = function(knex) 
{
  return knex.schema
    .createTable( "projects", table =>
    {
      table.increments();

      table.text( "name", 128 )
           .unique()
           .notNullable();
      
      table.text( "description" );

      table.boolean( "completed" )
           .defaultTo( false );
    } )
    .createTable( "resources", table =>
    {
      table.increments();

      table.text( "name", 128 )
           .unique()
           .notNullable();
      
      table.text( "description" );
    } )
    .createTable( "tasks", table =>
    {
      table.increments();

      table.text( "description" )
           .unique()
           .notNullable();
      
      table.text( "notes" );

      table.boolean( "completed" )
           .notNullable()
           .defaultTo( false );
      
      table.integer( "project_id" )
           .unsigned()
           .notNullable()
           .references( "id" )
           .inTable( "projects" )
           .onUpdate( "CASCADE" )
           .onDelete( "CASCADE" );     
    } )
    .createTable( "project_resources", table =>
    {
      table.increments();

      table.integer( "project_id" )
           .unsigned()
           .notNullable()
           .references( "id" )
           .inTable( "projects" )
           .onUpdate( "CASCADE" )
           .onDelete( "CASCADE" ); 
      
      table.integer( "resource_id" )
           .unsigned()
           .notNullable()
           .references( "id" )
           .inTable( "resources" )
           .onUpdate( "CASCADE" )
           .onDelete( "CASCADE" );
    } )
};

exports.down = function(knex) 
{
  return knex.schema
    .dropTableIfExists( "projects_resources" )
    .dropTableIfExists( "tasks" )
    .dropTableIfExists( "resources" )
    .dropTableIfExists( "projects" )
};