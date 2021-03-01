'use strict';

class Weather {

  generate(){
    var types = ["stormy", "sunny"]
    return Math.floor((Math.random() * (types.length) + 1));
  }
}
