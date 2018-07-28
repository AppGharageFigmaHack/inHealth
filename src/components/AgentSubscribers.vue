<template>
  <div class="agentdashboard">

    

    <div class="container">
            <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12" style="padding:10px">
                            <div class="card">
                                    <div class="ui" style="padding:30px">
                                        <div class="row">
                                            <div class="col">
                                                <h3>ALL SUBSCRIBERS</h3>
                                            </div>
                                            <div class="col"></div>
                                            <div class="col-3">
                                                <button class="ui blue button" style="border-radius:100px">Add Subscriber</button>
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
                                                            <a href="" class="ui rounded basic green button">View</a>
                                                            <a href=" " class="ui rounded basic yellow button">Edit</a>
                                                            <a href=" " class="ui rounded basic red button ">Delete</a>
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
                                                            <a href="" class="ui rounded basic green button">View</a>
                                                            <a href=" " class="ui rounded basic yellow button ">Edit</a>
                                                            <a href=" " class="ui rounded basic red button ">Delete</a>
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
  
export default {
  name: 'AgentSubscribers',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    }
    
  },
 
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
