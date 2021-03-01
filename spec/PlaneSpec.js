'use strict';

describe("Plane", function(){
  var plane;
  beforeEach(function(){
    plane = new Plane();
  });

  it("initialises a new plane in the air by default", function(){
    expect(plane.inAir).toEqual(true)
  });

  describe("isInAir", function(){
    it("reveals whether a plane is in the air", function(){
      expect(plane.isInAir()).toEqual(true);
    });
  })

  describe("ground", function(){
    it("grounds a plane upon landing", function(){
      plane.ground()
      expect(plane.isInAir()).toEqual(false);
    });
  })

  describe("airborn", function(){
    it("confirms plane to being airborn after takeoff", function(){
      plane.ground()
      plane.airborn()
      expect(plane.inAir).toEqual(true);
    });
  })
});
