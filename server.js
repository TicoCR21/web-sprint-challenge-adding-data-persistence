const express = require( "express" );
const helmet = require( "helmet" );

const server = express();

server.use( helmet() );
server.use( express.json() );

server.use( "/api/projects", require( "./projects/projects-router" ) );
server.use( "/api/resources", require( "./resources/resources-router" ) );
server.use( "/api/tasks", require( "./tasks/tasks-router" ) );

module.exports = server;