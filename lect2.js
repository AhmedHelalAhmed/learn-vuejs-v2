

//object to use Vue framework like $ in jquery
new Vue({

  //a scope in html
  'el':'#app',

  //variables in the scope
  'data':{
    name:'test123.local',
    list:['html','css','php'],
    newItem:'',

  },

  //methods in the scope
  'methods':{

    // to delete element
    deleteitem:function(item){
      var index=this.list.indexOf(item);
      this.list.splice(index,1);
    },

    //to add element
    addnewitem:function(){

      this.list.push(this.newItem);
      this.newItem='';
    }
  },



});
