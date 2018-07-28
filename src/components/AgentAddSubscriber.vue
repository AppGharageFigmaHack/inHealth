<template>
  <div class="agentdashboard">

    

    <div class="container" >
            <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12" style="padding:10px">
                            <div class="card" style="padding:30px">

                                    <form class="ui form">
                                        <h4 class="ui">Add New Subscriber</h4>
                                        <p>Please fill the form below to add a new subscriber</p>
                                        <div class="field">
                                                    <!-- <div class="ui large icon input field">
                                                        <input type="text" placeholder="First Name*">
                                                    </div>
                                                    <div class="ui large icon input field">
                                                        <input type="text" placeholder="Last Name*">
                                                    </div> -->
                                            <div class="two fields">
                                                <div class="ui large field">
                                                    <input type="text" name="firstname" placeholder="First Name*">
                                                </div>
                                                <div class="field">
                                                    <input type="text" name="lastname" placeholder="Last Name*">
                                                </div>
                                            </div>
                                        </div>
                        
                                        <div class="field">
                                            <div class="two fields">
                                                <div class="ui large field">
                                                    <input type="date" name="dob" placeholder="Date of Birth*">
                                                </div>
                                                <div class="field">
                                                    <select class="ui fluid dropdown" placeholder="Gender">
                                                        <option disabled selected value="">Gender</option>                        
                                                            </select>
                                                </div>
                                            </div>
                                        </div>
                        
                                        <h4 class="ui dividing header"></h4>
                        
                                        <div class="field">
                                            <div class="two fields">
                                                <div class="ui large field">
                                                    <input type="text" name="telephone" placeholder="Telephone*">
                                                </div>
                        
                                                <div class="field">
                                                    <input type="text" name="email" placeholder="Email*">
                                                </div>
                                            </div>
                                        </div>
                        
                                        <div class="field">
                                            <div class="two fields">
                                                <div class="ui large field">
                                                    <select class="ui fluid dropdown">
                                                        <option disabled selected value="" >Nationality</option>                        
                                                    </select>
                                                </div>
                        
                                                <div class="ui large field">
                                                    <input type="text" name="hometwon" placeholder="Hometown*">
                                                </div>
                                            </div> <br>
                                            <p>NB: All fields with * are required</p>
                                        </div>
                                        <div class="ui button primary" style="float:right; border-radius:100px">Submit</div>
                                    </form>
                                </div>
                    </div>
            </div>
       
    </div>
    
  </div>
</template>

<script>
  
export default {
  name: 'AgentAddSubcriber',
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

    a.item {
        color: #828282 !important;
        font-size: 12px !important;
        font-weight: 400;
    }
    
    a.item:hover {
        color: #AE0725 !important;
    }
</style>
