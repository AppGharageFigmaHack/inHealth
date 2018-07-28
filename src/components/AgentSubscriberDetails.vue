<template>
  <div class="agentdashboard">

      <div class="container" style="padding:50px">
        <div class="row">
            <div class="col-2">
            </div>

            <div class="col-8">
                <div class="card" style="padding:30px">
                    <form>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label col-form-label-sm">First Name:</label>
                            <div class="col-sm-6">
                            </div>
                            <label class="col-sm-2 col-form-label col-form-label-sm">Last Name:</label>
                            <div class="col-sm-6">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label col-form-label-sm">Date of Birth:</label>
                            <div class="col-sm-6">
                            </div>
                            <label class="col-sm-2 col-form-label col-form-label-sm">Gender:</label>
                            <div class="col-sm-6">
                            </div>
                        </div>

                        <hr>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label col-form-label-sm">Telephone:</label>
                            <div class="col-sm-6">
                            </div>
                            <label class="col-sm-2 col-form-label col-form-label-sm">Email:</label>
                            <div class="col-sm-6">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label col-form-label-sm">Nationality:</label>
                            <div class="col-sm-6">
                            </div>
                            <label class="col-sm-2 col-form-label col-form-label-sm">Hometown:</label>
                            <div class="col-sm-6">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-2"></div>


        </div>
        <div class="row" style="padding:10px">
            <div class="col-10">

                <div class="ui button primary" style=" float:right; border-radius:100px">Edit</div>
            </div>

        </div>

    </div>
    
  </div>
</template>

<script>
  
export default {
  name: 'AgentSubscriberDetails',
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

input, textarea, button{
  padding: 10px;
}
</style>
