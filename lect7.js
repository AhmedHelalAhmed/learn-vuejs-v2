new Vue({
  'el':'#app',


  'data':{
    'msg':'<h1>hello world</h1>',
    'itemId':5,
    'x':1,
    'y':2,
    'z':3,
  },
  'methods':{
    'multi':function(){
      return this.x*this.y*this.z;
    }
  }

});
