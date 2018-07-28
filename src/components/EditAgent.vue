<template>
  <div class="agentdashboard">

    

    <div class="container" style="padding:20px">
        <div class="card" style="padding:30px">

            <form class="ui form">
                <h3 class="ui">EDIT AGENT DETAILS</h3>
                <p>Please modify details below</p>
                <div class="field">
                    <div class="two fields">
                        <div class="field">
                            <input type="text" name="firstname" placeholder="First Name*">
                        </div>
                        <div class="field">
                            <input type="text" name="lastname" placeholder="Last Name*">
                        </div>
                    </div>
                </div>

                <div class="field">
                    <div class="two fields">
                        <div class="field">
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
                        <div class="field">
                            <input type="text" name="telephone" placeholder="Telephone*">
                        </div>

                        <div class="field">
                            <input type="text" name="email" placeholder="Email*">
                        </div>
                    </div>
                </div>

                <div class="field">
                    <div class="two fields">
                        <div class="field">
                            <select class="ui fluid dropdown">
                                    <option disabled selected value="" >Nationality</option>                        
                                </select>
                        </div>

                        <div class="field">
                            <input type="text" name="hometwon" placeholder="Hometown*">
                        </div>
                    </div>
                </div>
                <div class="ui button primary" style="float:right; border-radius:100px">Save</div>
            </form>
        </div>
    </div>
    
  </div>
</template>

<script>
  
export default {
  name: 'EditAgent',
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
