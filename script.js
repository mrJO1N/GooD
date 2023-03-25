function start () {
  setSettings( {
    "height": window.innerHeight,
    "width": window.innerWidth
  } );

// (width, height, css)
Render.init( "border: solid 4px yellow; background-color: aqua" );

/*

let Xtime = 0,
  Ytime = 0,
  Xtime2 = true,
  Ytime2 = true,
  forever = setInterval( () => {
    if ( Xtime2 ) Xtime += 10; else Xtime -= 10;

    if ( ( Xtime < 0 ) || ( Xtime > window.innerWidth-100 ) ) {
      ( Xtime2 ) ? Xtime2 = false : Xtime2 = true;
    }
    

    if ( Ytime2 ) Ytime += 10; else Ytime -= 10;

    if ( ( Ytime < 0 ) || ( Ytime > window.innerHeight-100 ) ) {
      ( Ytime2 ) ? Ytime2 = false : Ytime2 = true;
    }

    Render.draw( [
      `green square ${ Xtime } ${ Ytime } 100 100`,
      `red circle ${ Ytime } ${ Xtime } 60`
    ] );
  }, 
10 );

*/

  let square = new Block( "square", "red", 0, 0, 100, 100 ),
      circle = new Block( "circle", "green", 0, 120, 100 );

  square.width = 400;

  circle.x += 100;
  circle.radius = 60;

  let circle2 = new Block( "circle", "green", 0, 120, 60 );
  circle2.x += 300;

   Render.draw( [
    square,
    circle2,
    circle
  ] );





}