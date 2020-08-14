const router = require( "express" ).Router();

const hf = require( "./tasks-model" );
const dbProjects = require( "../projects/projects-model" );

router.get( "/", ( req, res ) =>
{
  hf.find()
    .then( response => { res.status( 200 ).json( response ) } )
    .catch( () => { res.status( 500 ).json( { message : "Error..." } ) } ); 
} );

router.get( "/:id", validatingProjectId, ( req, res ) =>
{
  hf.findById( req.params.id )
    .then( response => { res.status( 200 ).json( response ) } )
    .catch( () => { res.status( 500 ).json( { message : "Error..." } ) } ); 
} );

router.post( "/:id", validatingProjectId, ( req, res ) =>
{
  hf.add( { project_id : req.params.id, ...req.body } )
    .then( response => res.status( 201 ).json( response ) )
    .catch( () => res.status( 500 ).json( { message : "Error..." } ) );
} );

function validatingProjectId( req, res, next )
{
  dbProjects.findById( req.params.id )
    .then( response => { response ? next() : res.status( 500 ).json( { messge : "Invalid Project ID..." } ) } )
    .catch( () => res.status( 500 ).json( { messge : "Error..." } ) )
}

module.exports = router;