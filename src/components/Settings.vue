<template>
  <div class="agentdashboard">


       <div class="container">
                <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12" style="padding:10px;">
                                <div class="card">
                                    <div class="row">
                                        <div class="col-3"></div>
                                        <div class="col-6">
                                                <div class="ui" style="padding:30px">
                                                        <div class="col">
                                                                <h3>SETTINGS</h3>
                                                            </div>
                                                            <div class="ui" style="padding:10px">
                                                                    <div class="ui form">
                                                                        <div class="field">
                                                                                <input type="text" placeholder="Enter new password">
                                                                        </div>
                                                                        <div class="field">
                                                                                <input type="text" placeholder="Confirm new password">
                                                                        </div>
                                                                        <div class="ui fluid primary rounded button">Reset Password</div>
                                                                    </div>
                                                                </div>
                                                    </div>
                                        </div>
                                        <div class="col-3"></div>
                                    </div>
                                </div>
                        </div>
                </div>
        </div>
        
    
  </div>
</template>

<script>
  
export default {
  name: 'Settings',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    }
    
  },
 
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
 .rounded {
      border-radius: 30px !important;
    }

input, textarea, button{
  padding: 10px;
}
</style>
