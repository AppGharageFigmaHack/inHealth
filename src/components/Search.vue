<template>
  <div class="agentdashboard">
    <Navigation/>

    

        <div class="container">
            <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12" style="padding:10px">
                            <div class="card">
                                    <div class="ui" style="padding:30px">
                                            <div class="col">
                                                    <h3>SEARCH</h3>
                                                </div>
                                    <div class="ui" style="padding:30px">
                                        <div class="row" style="background-color: #F6F6F6; padding: 20px;">
                                            
                                            <div class="col-lg-5 col-sm-12">
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
                                            <div class="col">
                                                <button class="ui blue button" style="border-radius:100px">Search</button>
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
                                                <tr class="three column wide">
                                                    <td>John</td>
                                                    <td>Approved</td>
                                                    <td>None</td>
                                                    <td>None</td>
                                                    <td>
                                                        <div class="row">
                                                            <a href="#" class="ui rounded basic green button">View</a>
                                                            <a href="#" class="ui rounded basic yellow button">Edit</a>
                                                            <a href="#" class="ui rounded basic red button ">Delete</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Jamie</td>
                                                    <td>Approved</td>
                                                    <td>Requires call</td>
                                                    <td>None</td>
                                                    <td>
                                                        <div class="row">
                                                            <a href="" class="ui rounded basic green button">View</a>
                                                            <a href=" " class="ui rounded basic yellow button ">Edit</a>
                                                            <a href=" " class="ui rounded basic red button ">Delete</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Jill</td>
                                                    <td>Denied</td>
                                                    <td>None</td>
                                                    <td>None</td>
                                                    <td>
                                                        <div class="row">
                                                            <a href="#" class="ui rounded basic green button">View</a>
                                                            <a href="#" class="ui rounded basic yellow button ">Edit</a>
                                                            <a href="#" class="ui rounded basic red button ">Delete</a>
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
    
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'Search',
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
            that.subscribers = subscriber.rows
            console.log(that.subscribers);
        });
    },
  },
  mounted () {

    this.getSubscribers();

    var subscriber = [
            {"first_name": "Peter Perez", "telephone": '0249382736' },
            {"first_name": "Micheal Sarpong", "telephone": '0549372634' },
            {"first_name": "Baffour Roberta", "telephone": '0500493800' },
    ];

    $('.ui .search')
        .search({
          source: subscriber, 
          searchFields: [
            'first_name',
            'telephone'
          ],    
          fields: {
            title   : 'first_name',
            description: 'telephone'
          },
          onSelect: function(result, response) {
            //set number field to selected number
            // $("#hiddenInput").val(result.id);
          }
        
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
