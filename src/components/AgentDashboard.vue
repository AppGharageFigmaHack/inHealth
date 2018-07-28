<template>
  <div class="agentdashboard">

    

    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-6" style="padding:10px">
                <div class="card" style="text-align:center; ">
                    <div class="card-body">
                        <h1 class="card-title">{{ subscribers.length }}</h1>
                        <h6 class="card-subtitle mb-2 text-muted">Total number of Subscribers</h6>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-6" style="padding:10px">
                <div class="card" style="text-align:center">
                    <div class="card-body">
                        <h1 class="card-title">1</h1>
                        <h6 class="card-subtitle mb-2 text-muted">Number of agents</h6>

                    </div>
                </div>
            </div>

        </div>
    </div>



    <div class="container">
            <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                            <div class="card">
                                    <div class="ui" style="padding:30px">
                                        <h3>TOP 10 Subscribers</h3>
                                        <table class="ui five column very basic table">
                                            <thead style="color:#828282;">
                                                <tr>
                                                    <th style="padding-top: 10px;">First Name</th>
                                                    <th style="padding-top: 10px;">Last Name</th>
                                                    <th style="padding-top: 10px;">Gender</th>
                                                    <th style="padding-top: 10px;">Telephone</th>
                                                    <th style="padding-top: 10px;">Email</th>
                        
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="subscriber in subscribers">
                                                    <td>{{ subscriber.doc.first_name }}</td>
                                                    <td>{{ subscriber.doc.last_name }}</td>
                                                    <td>{{ subscriber.doc.gender }}</td>
                                                    <td>{{ subscriber.doc.telephone }}</td>
                                                    <td>{{ subscriber.doc.email }}</td>
                        
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                    </div>
            </div>
       
    </div>
    
  </div>
</template>

<script>
  
export default {
  name: 'AgentDashboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      subscribers: []
    }
    
  },

  methods: {
    getSubscribers() {
      var that = this;

      db.allDocs({include_docs: true, descending: true}, function(err, subscriber){
            that.subscribers = subscriber.rows
            console.log(that.subscribers);
        });
    }
  },
  mounted(){
    this.getSubscribers();
      
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
        font-family: 'Comfortaa', cursive;
        /* outline: 1px solid blue !important; */
    }
    
    h1 {
        font-family: 'Lato', sans-serif;
        color: #AE0725
    }
    
    h6 {
        color: #828282;
    }
    
    .container {
        padding: 30px
    }
    
    body {
        background: #f6f6f6;
    }
    
    i {
        font-size: 25px
    }
    
    ul {
        cursor: pointer;
    }

    a.item {
        color: #828282 !important;
        font-size: 12px !important;
        font-weight: 400;
    }
    
    a.item:hover {
        color: #AE0725 !important;
    }
</style>
