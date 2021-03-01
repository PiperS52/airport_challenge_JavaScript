'use strict';

describe("Weather", function(){
  var weather
  beforeEach(function(){
    weather = new Weather;
  });
  describe("generate", function(){
    it("creates stormy weather sometimes", function(){
      spyOn(Math, 'floor').and.returnValue(1);
      expect(weather.generate()).toEqual(1)
    })
    it("creates sunny weather", function(){
      spyOn(Math, 'floor').and.returnValue(2);
      expect(weather.generate()).toEqual(2)
    })
  })

})
