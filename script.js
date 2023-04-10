function start () {
  setSettings( {
    "path": "#game",
    "height": window.innerHeight,
    "width": window.innerWidth
  } );

  // (width, height, css)
  Render.init( "border: solid 4px yellow; background-color: aqua" );



  let square = new Square( "green", undefined, undefined, 100, 100 ),
    Xtime2 = true,
    Ytime2 = true,
    forever = setInterval( () => {
      if ( Xtime2 ) square.x += 10; else square.x -= 10;

      if ( ( square.x < 0 ) || ( square.x > window.innerWidth-100 ) ) {
        ( Xtime2 ) ? Xtime2 = false : Xtime2 = true;
      }
      

      if ( Ytime2 ) square.y += 10; else square.y -= 10;

      if ( ( square.y < 0 ) | ( square.y > window.innerHeight-100 ) ) {
        ( Ytime2 ) ? Ytime2 = false : Ytime2 = true;
      }

      Render.draw( [
        square
      ] );
    }, 
  10 );












}