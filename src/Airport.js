'use strict';

class Airport {
  constructor(weather){
    this.planes = []
    this.capacity = 2
    this.weather = typeof weather !== 'undefined' ? weather : new Weather();
  }

  setCapacity(capacity) {
  this.capacity = capacity;
  }

  getPlanes() {
  return this.planes;
  }

  getCapacity() {
    return this.capacity;
  }

  land(plane){
    if (this.isFull()){
      throw new Error ("Cannot land: airport is full");
    } else if (this.isStormy()){
      throw new Error ("Cannot land: stormy weather");
    } else {
      plane.ground();
      this.planes.push(plane);
    }
  }

  takeoff(){
    if (this.isStormy()){
      throw new Error ("Cannot take-off: stormy weather");
    } else if (plane.isInAir()) {
      throw new Error ("Cannot take-off: no planes in hangar")
    } else {
      this.planes.pop(); 
      plane.airborn();
    }
  }

  isStormy(){
    if (this.weather.generate() === 1){
      return true;
    } else {
      return false;
    }
  }

  isFull(){
    return this.planes.length >= this.capacity
  }

  isEmpty(){
    return this.planes.length === 0
  }
}
