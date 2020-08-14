const server = require( "./server" );
const PORT_NUMBER = process.env.PORT || 5000;
server.listen( PORT_NUMBER, () => { console.log( `Server Running on Port Number ${ PORT_NUMBER }` ) } );