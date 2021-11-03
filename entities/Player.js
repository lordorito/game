import { midX, midY } from '../globalValues.js'
import Circle from './Circle.js'
import Projectile from './Projectile.js'

export default class Player extends Circle{

  constructor({x,y,radius,color}){
    super(x,y,radius,color)
    this.draw()
  }

  throw({clientX,clientY}){
    console.log(this)
    const projectileProps = {
      x: midX,
      y: midY,
      radius: 5,
      color: "rgba(133, 92, 248, 1)",
      target:{
        clientX,
        clientY
      }
    }
    this.projectiles.push(new Projectile(projectileProps))
  }
}



