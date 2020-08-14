const router = require( "express" ).Router();

const hf = require( "./resources-model" );

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

router.get( "/:id/projects", ( req, res ) =>
{
  hf.findProjectsPerResource( req.params.id )
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