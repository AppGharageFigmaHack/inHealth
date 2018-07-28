<template>
  <div class="hello">


    <!-- Navigation -->
    <nav class="navbar navbar-light bg-light static-top">
        <div class="container">
            <a class="navbar-brand" href="#">inHealth</a>
            <a class="btn btn-danger" href="#">Sign Up</a>

        </div>
    </nav>

    <!-- Masthead -->
    <header class="masthead text-white text-center">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-xl-9 mx-auto">
                    <h1 class="mb-5">Collecting data of citizens details easily</h1>
                </div>
                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">

                </div>
            </div>
        </div>
    </header>

    <!-- Icons Grid -->
    <section class="features-icons bg-light text-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div class="features-icons-icon d-flex">
                            <i class="icon-screen-desktop m-auto text-danger"></i>
                        </div>
                        <h3>Record data offline</h3>
                        <p class="lead mb-0">Record data offline to be synched online</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <div class="features-icons-icon d-flex">
                            <i class="icon-layers m-auto text-danger"></i>
                        </div>
                        <h3>Record data easily</h3>
                        <p class="lead mb-0">Easy to record data onto the platform</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                        <div class="features-icons-icon d-flex">
                            <i class="icon-check m-auto text-danger"></i>
                        </div>
                        <h3>Easy to Use</h3>
                        <p class="lead mb-0">Ready for use, no need to learn how to use</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Image Showcases -->
    <section class="showcase">
        <div class="container-fluid p-0">
            <div class="row no-gutters">

                <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url('../static/img/offline.png');"></div>
                <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h2>Record data offline</h2>
                    <p class="lead mb-0">Record data offline and when there's internet connection, the data will be synched into the platform. No need to wait for internet connection.</p>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-lg-6 text-white showcase-img" style="background-image: url('../static/img/r.png');"></div>
                <div class="col-lg-6 my-auto showcase-text">
                    <h2>Record data easily</h2>
                    <p class="lead mb-0"> Record data with a click of a button with no stress.</p>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url('../../static/img/s.png'); "></div>
                <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h2>Easy to Use</h2>
                    <p class="lead mb-0">User friendly interface. No need to learn how to use.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->


    <!-- Call to Action -->
    <section class="call-to-action text-white text-center">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-xl-9 mx-auto">
                    <h2 class="mb-4">Join us let's make the National Health Issurance better</h2>
                </div>
                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">

                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
                    <ul class="list-inline mb-2">
                        <li class="list-inline-item">
                            <a href="#">About</a>
                        </li>
                        <li class="list-inline-item">&sdot;</li>
                        <li class="list-inline-item">
                            <a href="#">Contact</a>
                        </li>


                    </ul>
                    <p class="text-muted small mb-4 mb-lg-0">&copy; AppGharage 2018. All Rights Reserved.</p>
                </div>
                <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item mr-3">
                            <a href="#">
                                <i class="fa fa-facebook fa-2x fa-fw"></i>
                            </a>
                        </li>
                        <li class="list-inline-item mr-3">
                            <a href="#">
                                <i class="fa fa-twitter fa-2x fa-fw"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="#">
                                <i class="facebook square icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>



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

</style>
