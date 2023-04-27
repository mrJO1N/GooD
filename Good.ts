const // doc = document.querySelector( "#page" ) ?? document.body,
  // d = ( text: any ) => doc.innerHTML = text,
  c = (text: any) => console.log(text)

/*
this code is test my skills

and check "i can make this?"


*/

/*

*settings: any
*content: any

*/

interface Settings {
  [key: string]: string | number

  path: string
  height: number
  width: number
}

let colorTime: string,
  object: object,
  ctx: any,
  settings: Settings = {
    path: 'body',
    height: window.innerHeight,
    width: window.innerWidth,
  }

function setSettings(obj?: Partial<Settings>) {
  if (obj == undefined) return
  for (let i in obj) {
    settings[i] = obj[i] ?? 0
  }
}

class Square {
  color: string = ''
  x: number = 0
  y: number = 0
  width: number = 10
  height: number = 10

  constructor(
    color: string,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    if (!new.target) {
      new Square(color, x, y, width, height)
    } else {
      this.color = color
      this.x = x | 0
      this.y = y | 0
      this.width = width | 10
      this.height = height | 10
    }
  }
}
class Circle {
  color: string = ''
  x: number = 0
  y: number = 0
  radius: number = 10

  constructor(color: string, x: number, y: number, radius: number) {
    if (!new.target) {
      new Circle(color, x, y, radius)
    } else {
      this.color = color
      this.x = (x - radius) | 0
      this.y = (y - radius) | 0
      this.radius = radius | 10
    }
  }
}

const Render = {
  // all graphics functions and methods

  init: (canvStyle: string) => {
    let doc = document.querySelector(settings.path) ?? document.body,
      canv = document.createElement('canvas')
    ctx = canv.getContext('2d') // work only in 2d space

    doc.appendChild(canv)

    canv.setAttribute('style', `height: auto; width: auto; ${canvStyle}`)
    document.body.setAttribute(
      'style',
      `margin: 0; padding: 0; overflow: hidden; height: ${settings.height}; width: ${settings.width}`
    )

    canv.height = settings.height
    canv.width = settings.width
  },

  draw: (content: any[]) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    for (const object of content) {
      if (object.color != colorTime) {
        //if the color is changed in the array (content), then the color being drawn changes
        colorTime = object.color
        ctx.fillStyle = colorTime
      }

      switch (object.constructor.name) {
        case 'Square':
          ctx.fillRect(object.x, object.y, object.width, object.height) // drawning square
          break
        case 'Circle':
          ctx.beginPath()
          ctx.arc(object.x, object.y, object.radius, 0, Math.PI * 2)
          ctx.fill()
          break
      }
    }
  },

  clear: () => ctx.clearRect(0, 0, settings.width, settings.height),
}
