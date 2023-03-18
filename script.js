function start () {
  setSettings( {
    "height": window.innerHeight,
    "width": window.innerWidth
  } );

let drawningObjects = [ //["color type x y width height"]
  "yellow square 0 0 300 200",
  "black square 0 100 100 100",
  "black square 200 100 100 100",
  "black square 100 0 100 100"
];

// (width, height, css)
Render.init( "border: solid 4px yellow; background-color: aqua" );

Render.draw( drawningObjects );


Render.draw( Array( "green circle 100 100 100" ) );


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

    //console.log( Xtime, Ytime,window.innerWidth, window.innerHeight );

    Render.draw( Array( `green square ${ Xtime } ${ Ytime } 100 100` ) );
  }, 
10 );
}