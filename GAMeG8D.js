/*
this code is test my skills

and check "i can make this?"


*/

let colorTime, 
  object,
  ctx,
  settings = {};

function c( text ) {
  console.log( text );
};

function setSettings(settingsTime) { // func for completion basic settings
  let basic = { // basic settings for "settings"
    "path": "body",
    "height": 150,
    "width": 300
  },
  basicKeys = Object.keys( basic ), // better make this now, than make this in cycle "for"
  basicValues = Object.values( basic ),
  reportTime = [];
  
  if ( typeof settingsTime != "undefined" ) {
    for ( let i=0; i<basicKeys.length; i++ ) {   
      if ( typeof settingsTime[ basicKeys[ i ] ] == "undefined" ) {
        settings[ basicKeys[ i ] ] = basicValues[ i ]; // if no such value is specified
        reportTime = reportTime + basicKeys[ i ];
      } else {
        settings[ basicKeys[ i ] ] = settingsTime[ basicKeys[ i ] ]; // if such value is specified
      };
    };
    if ( reportTime.length != 0 ) console.log( "you don't write this in setSettings: " + reportTime ); // report warnings to console
  } else {
    settings = basic;
  };
};

class Block{
  constructor ( type, color, x, y, width, height ) {

    this.type = type
    this.color = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    
  }
}

const Render = { // all graphics functions and methods

  init: (canvStyle) => { 
    let doc = document.querySelector( settings.path ),
    canv = document.createElement( "canvas" );
    ctx = canv.getContext( "2d" ); // work only in 2d space

    doc.appendChild( canv ); 
    
    canv.style = "height: auto; width: auto"
    document.body.style = `margin: 0; padding: 0; overflow: hidden; height: ${ settings.height }; width: ${ settings.width }`;
    
    canv.height = settings.height;
    canv.width = settings.width;

    canv.style = canvStyle;
    
  },

  draw: ( content ) => {
    ctx.clearRect( 0, 0, window.innerWidth, window.innerHeight );
    for (const object of content) {
      

      if ( object.color != colorTime ) { //if the color is changed in the array (content), then the color being drawn changes
        colorTime = object.color;
        ctx.fillStyle = colorTime;
      };

      // ["color type x y width height"]
      switch ( object.type ) {
        case "square":
          ctx.fillRect( object.x, object.y, object.width, object.height ); // drawning square
          break;
        case "circle":
          ctx.beginPath();
          ctx.arc( object.x, object.y, object.radius, 0, Math.PI*2 );
          ctx.fill();
          break;
      }

    }
  },

  clear: () => ctx.clearRect( 0, 0, settings.width, settings.height )
}