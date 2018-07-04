new Vue({

  //root element (scope of the Vue instance)
  'el': '#app',

  //my variable
  'data': {
    'counter': 0,
  },

  //my methods
  'methods': {
    'showMsg': function() {
      alert('hello!');
    }
  }

});
