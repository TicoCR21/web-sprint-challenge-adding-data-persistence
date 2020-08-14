exports.seed = function( knex ) {
  return knex( 'resources' ).truncate()
    .then( function () {
      return knex( 'resources' ).insert(
        [
          { name : "AI Book", description : "AI Boook Containing Various Algorithms" },
          { name : "Ashe Build", description : "League of Legends Building Ashe Best Items" },
          { name : "Express Book", description : "Node and Express Resources" },
          { name : "Gaming Mouse", description : "Mouse Designed for Gaming" },
          { name : "Algorithms Book", description : "Book full of Algorithms" },
          { name : "Greedy Algorithms Book", description : "Greedy Algorithms Implementation and Explanation" },
          { name : "League of Legends Plays", description : "Collection of League Plays" },
          { name : "Red Paint", description : "Red Paint" },
          { name : "Green Paint", description : "Green Paint" },
          { name : "Brown Paint", description : "Brown Paint" },
          { name : "Clay", description : "Clay" },
          { name : "Gaming Keyboard", description : "Keyboard Designed for Gaming" }
        ] );
    });
};