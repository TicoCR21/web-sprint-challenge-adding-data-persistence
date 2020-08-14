const router = require( "express" ).Router();

const hf = require( "./projects-model" );

router.get( "/", ( req, res ) =>
{
  hf.find()
    .then( response => { res.status( 200 ).json( response ) } )
    .catch( () => { res.status( 500 ).json( { message : "Error..." } ) } ); 
} );

router.get( "/:id", ( req, res ) =>
{
  hf.findById( req.params.id )
    .then( response => { res.status( 200 ).json( response ) } )
    .catch( () => { res.status( 500 ).json( { message : "Error..." } ) } ); 
} );

router.get( "/:id/resources", ( req, res ) =>
{
  hf.findProjectResources( req.params.id )
    .then( response => { res.status( 200 ).json( response ) } )
    .catch( () => { res.status( 500 ).json( { message : "Error..." } ) } ); 
} );

router.get( "/:id/tasks", ( req, res ) =>
{
  hf.findProjectTasks( req.params.id )
    .then( response => { res.status( 200 ).json( response ) } )
    .catch( () => { res.status( 500 ).json( { message : "Error..." } ) } ); 
} );

router.post( "/", ( req, res ) =>
{
  hf.add( req.body )
    .then( response => res.status( 201 ).json( response ) )
    .catch( () => res.status( 500 ).json( { message : "Error..." } ) );
} );

module.exports = router;