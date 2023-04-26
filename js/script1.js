function start() {

  const height = window.innerHeight - 12,
  width = window.innerWidth - 12,

  player = new Square(
    "red",
    width * 0.95 ,
    ( height / 2 ) - ( height / 16 ),
    20,
    ( height / 8 )
  ),
  puck = new Circle(
    "green",
    ( width / 2 ),
    ( height / 2 ),
    ( width / 400 )
  ),
  opponent = new Square( 
    "blue",
    10,
    ( height / 2 ) - 40,
    20,
    ( height / 8 )
  );

let puckMoveY = 1,
  puckMovex = 1;



function puckMove () {
  
}



doc.addEventListener( "keydown", ( e ) => {
  c( [ player.y, (player.y+player.height), height ] )
  if ( !( ( player.y > -3.5 ) || !( player.y+player.height > height ) ) ) return;
  switch ( e.keyCode ) {
    case 83:
    case 40:
      player.y += 4;
      break;
    case 87:
    case 38:
      player.y -= 4;
      break;
    default:
      c( "null" )
      break;
  }
} );

setSettings( {
  height: height,
  width: width,
} );

Render.init( "border: 6px solid aqua; background-color: black" );

setInterval( () => {
  Render.draw( [
    player,
    puck,
    opponent,
  ] );

}, 1 );

}