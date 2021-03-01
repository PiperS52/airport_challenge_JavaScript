'use strict';

describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    plane = jasmine.createSpyObj('plane', ['ground', 'isInAir', 'airborn']);
    weather = jasmine.createSpyObj('weather', ['generate']);
    airport = new Airport(weather);
  });

  it('has no planes by default', function(){
    expect(airport.getPlanes()).toEqual([]);
  });

  describe("constructor", function () {
    it("has a default capacity", function () {
      expect(airport.capacity).toEqual(2);
      })
  })

  describe("sunny conditions", function () {
    beforeEach(function(){
      weather.generate.and.returnValue(2);
      });
      it("can check for stormy conditions", function(){
        expect(airport.isStormy()).toEqual(false);
      })
      
      it("throws an error if a landing plane would exceed airport capacity", function () {
        airport.land(plane);
        airport.land(plane);
        expect(airport.isFull()).toEqual(true)
        expect(function() {
          airport.land(plane);
          }).toThrowError("Cannot land: airport is full");
      })

      it("can let planes takeoff", function () {
        airport.land(plane);
        airport.takeoff(plane)
        expect(airport.getPlanes()).toEqual([])
      })

      it("can let planes land", function () {
        airport.land(plane);
        expect(airport.getPlanes().length).toEqual(1)
      })

      describe("plane not at airport", function(){
        beforeEach(function(){
          plane.isInAir.and.returnValue(true);
          });
          it("throws an error if plane not at airport", function () {
            expect(function() {
              airport.takeoff(plane);
            }).toThrowError("Cannot take-off: plane not at airport");
          })
      })
    })

    describe("stormy conditions", function () {
      beforeEach(function(){
        weather.generate.and.returnValue(1);
        });
      it("throws an error if a plane try to takeoff", function () {
        expect(function() {
          airport.takeoff(plane);
        }).toThrowError("Cannot take-off: stormy weather");
      })

      it("throws an error if a plane tries to land", function () {
        expect(function() {
          airport.land(plane);
        }).toThrowError("Cannot land: stormy weather");
      })
    })

})
