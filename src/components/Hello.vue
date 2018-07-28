<template>
  <div class="hello">
    <input type="text" placeholder="Enter Note Title" v-model="title" name=""><br>
    
    <textarea placeholder="Enter Note Text" v-model="text"></textarea><br>
    <button @click="addTodo()">Save Note</button>

    <ul>
      <div v-for="todo in todos">
              <li>{{ todo.doc.title }} <button style="background-color: red; color: white;" @click="deleteTodo(todo.doc)">Delete</button></li><hr/>
      </div>
    </ul>
  </div>
</template>

<script> 
  
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      title: '',
      text: '',
      todos: []
    }
    
  },

  methods: {
    addTodo(){
      var todo = {
        _id: new Date().toISOString(),
        title: this.title,
        text: this.text,
        completed: false
      };
      var that = this;

      db.put(todo, function callback(err, result) {

        that.getTodos();
        
        if (!err) {
          console.log('Successfully posted a todo!');
        }
      });
    },
    getTodos() {
      var that = this;

      db.allDocs({include_docs: true, descending: true}, function(err, todo){
            that.todos = todo.rows
        });
    },
    deleteTodo(todo) {
      db.remove(todo);
      console.log("deleted Successfully!");
      this.getTodos();
    }
  },
  mounted(){
    this.getTodos();
      
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

input, textarea, button{
  padding: 10px;
}
</style>
