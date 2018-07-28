<template>
  <div class="agentdashboard">
    <Navigation/>

    

    <div class="container">
            <div class="row">
                        
                    <div class="col-lg-12 col-sm-12">
                        <div class="ui form">       
                            <div class="ui fluid search">
                              <div class="ui fluid input">
                                <input class="prompt" type="text" name="name[]" placeholder="Enter Name or Phone *" required>
                                <input type="hidden" id="hiddenInput" value="" name="actor_id[]" required>
                                
                              </div>
                              <div class="fluid results"></div>
                          </div>
                        </div>
                        
                    </div>
    

                    <div class="col-sm-12 col-md-12 col-lg-12" style="padding:10px">
                            <div class="card">
                                    <div class="ui" style="padding:30px">
                                        <div class="row">
                                            <div class="col">
                                                <h3>ALL SUBSCRIBERS</h3>
                                            </div>
                                            <div class="col"></div>
                                            <div class="col-3">
                                                <a href="/user/agent/add-subscriber" class="ui blue button" style="border-radius:100px">Add Subscriber</a>
                                            </div>
                        
                                        </div>
                        
                                        <table class="ui column very basic table padded">
                                            <thead style="color:#828282;" class="padded">
                                                <tr>
                                                    <th style="padding-top: 10px;">First Name</th>
                                                    <th style="padding-top: 10px;">Last Name</th>
                                                    <th style="padding-top: 10px;" class="three column wide">Gender</th>
                                                    <th style="padding-top: 10px;">Telephone</th>
                                                    <th style="padding-top: 10px;">Action</th>
                        
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="subscriber in subscribers" class="three column wide">
                                                    <td>{{ subscriber.doc.first_name }}</td>
                                                    <td>{{ subscriber.doc.last_name }}</td>
                                                    <td>{{ subscriber.doc.gender }}</td>
                                                    <td>{{ subscriber.doc.telephone }}</td>
                                                    <td>
                                                        <div class="row">
                                                            <a :href="'/user/agent/subscriber/' + subscriber.doc._id" class="ui rounded basic green button">View</a>
                                                            <a @click="deleteSubscriber(subscriber.doc)" class="ui rounded basic red button ">Delete</a>
                                                        </div>
                                                    </td>
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
import Navigation from '@/components/Navigation'

export default {
  name: 'AgentSubscribers',
  components: {
      Navigation
  },
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
            that.subscribers = subscriber.rows;

            return subscriber.rows;
        });
    },
    deleteSubscriber(subscriber) {
      db.remove(subscriber);
      console.log("deleted Successfully!");
      this.getSubscribers();
    }
  },
  mounted(){

    this.getSubscribers();

    db.allDocs({include_docs: true, descending: true}, function(err, subscriber){
        var subs = subscriber.rows;
        var subscribers = [];

        subs.forEach(function(el){
            subscribers.push(el.doc);
        })

        $('.ui .search')
        .search({
          source: subscribers, 
          searchFields: [
            'first_name',
            'last_name',
            'telephone'
          ],    
          fields: {
            title   : 'last_name'  ,
            description: 'first_name'
          },
          onSelect: function(result, response) {
            //set number field to selected number

            var id = result._id;
            console.log(id);

            window.location.href = "/user/agent/subscriber/" + id;

          }
        
      });
    });

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
    .rounded {
      border-radius: 30px !important;
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
