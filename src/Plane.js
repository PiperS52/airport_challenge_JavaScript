'use strict';

class Plane {
  constructor(){
    this.inAir = true
  }

  isInAir(){
    return this.inAir
  }

  ground(){
    this.inAir = false
  }

  airborn(){
    this.inAir = true
  }

}
