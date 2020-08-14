exports.seed = function( knex ) {
  return knex( 'projects' ).truncate()
    .then( function () {
      return knex( 'projects' ).insert(
        [
          { name : "Task List", description : "Simple To-Do List Using React", completed : true },
          { name : "Reaching Gold", description : "League of Legends Ranking System", completed : false },
          { name : "Node Server", description : "Creating a Simple Server Using Node and Express", completed : true },
          { name : "Tic-Tac-Toe AI", description : "AI Minimax Algorithms", completed : false },
          { name : "Erupting Volcano", description : "5th Grade Project", completed : true },
          { name : "Twitter Copy", description : "My Own Version of Twitter", completed : false },
          { name : "Build a Gaming PC", description : "Build a Computer for Gaming", completed : false }
        ] );
    });
};