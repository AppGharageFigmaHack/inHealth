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
                                                            <h3>CLAIMS</h3>
                                                        </div>
                                                        <div class="ui" style="padding:10px">
                                                                <div class="ui form">
                                                                    <div class="field">
                                                                        <input type="text">
                                                                    </div>
                                                                    <div class="field">
                                                                        <input type="text">
                                                                    </div>
                                                                    <div class="ui fluid primary rounded button">Claim</div>
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
  name: 'Claims',
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
