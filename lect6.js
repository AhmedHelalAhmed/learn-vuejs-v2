new Vue({
  'el':'#app',


  'data':{
    'title':'Hello World!',
    'name':'Ahmed Helal'
  },
  //Root element will be deleted and the code in template will replace it
  'template':'<div><div>test 1 2 3 </div> <div>{{title}}</div></div>'

});
