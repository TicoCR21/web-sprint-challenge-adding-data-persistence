exports.seed = function( knex ) {
  return knex( 'tasks' ).truncate()
    .then( function () {
      return knex( 'tasks' ).insert(
        [
          { description : "Keep Winning To Rank Up", notes : "Play Rank and Win To Get Promoted", completed : false, project_id : 2 },
          { description : "Play ADC", notes : "Ashe Will Destroy", completed : false, project_id : 2 },
          { description : "Try Training Tool", notes : "Training Tools Will Help You Practice Combos and Plays", completed : false, project_id : 2 },
          { description : "Hyper Carries", notes : "Play with Meta Champtions", completed : false, project_id : 2 },
          { description : "AI Boook Containing Various Algorithms", notes : "AI Algorithms", completed : false, project_id : 4 },
          { description : "Code Every Day", notes : "Algorithms", completed : false, project_id : 4 },
          { description : "Install React", notes : "React", completed : false, project_id : 1 },
          { description : "Install Redux", notes : "React Redux", completed : false, project_id : 1 },
          { description : "Middleware Thunk", notes : "What is Middleware????", completed : false, project_id : 1 },
          { description : "Review Training Kit", notes : "What is Express????", completed : false, project_id : 3 },
          { description : "Learn Server Routing", notes : "Review Videos and Code", completed : false, project_id : 3 },
          { description : "Main Vayne", notes : "She Destroys Late Game", completed : false, project_id : 2 }
        ] );
    });
};