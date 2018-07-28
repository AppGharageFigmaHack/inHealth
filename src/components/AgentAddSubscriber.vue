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
                                                    <input type="text" v-model="first_name" name="firstname" placeholder="First Name*">
                                                </div>
                                                <div class="field">
                                                    <input type="text" v-model="last_name" name="lastname" placeholder="Last Name*">
                                                </div>
                                            </div>
                                        </div>
                        
                                        <div class="field">
                                            <div class="two fields">
                                                <div class="ui large field">
                                                    <input type="date" v-model="dob" name="dob" placeholder="Date of Birth*">
                                                </div>
                                                <div class="field">
                                                    <select class="ui fluid dropdown" v-model="gender" placeholder="Gender">
                                                        <option  selected value="">Gender</option>                        
                                                        <option   value="Male">Male</option>                        
                                                        <option   value="Female">Female</option>                        
                                                            </select>
                                                </div>
                                            </div>
                                        </div>
                        
                                        <h4 class="ui dividing header"></h4>
                        
                                        <div class="field">
                                            <div class="two fields">
                                                <div class="ui large field">
                                                    <input type="text" v-model="telephone"  name="telephone" placeholder="Telephone*">
                                                </div>
                        
                                                <div class="field">
                                                    <input type="text" v-model="email" name="email" placeholder="Email*">
                                                </div>
                                            </div>
                                        </div>
                        
                                        <div class="field">
                                            <div class="two fields">
                                                <div class="ui large field">
                                                    <select class="ui fluid dropdown" v-model="nationality">
                                                        <option  selected value="" >Nationality</option>                        
                                                        <option   value="Ghana" >Ghana</option>                        
                                                        <option   value="Nigeria" >Nigeria</option>                        
                                                        <option   value="Togo" >Togo</option>                        
                                                    </select>
                                                </div>
                        
                                                <div class="ui large field">
                                                    <input type="text" v-model="home_towm" name="hometwon" placeholder="Hometown*">
                                                </div>
                                            </div> <br>
                                            <p>NB: All fields with * are required</p>
                                        </div>
                                        <div class="ui button primary" @click="addSubscriber()" style="float:right; border-radius:100px">Submit</div>
                                    </form>
                                </div>
                    </div>
            </div>
       
    </div>
    
  </div>
</template>

<script>
  
export default {
  name: 'AgentAddSubscriber',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      first_name: '',
      last_name: '',
      dob: '',
      gender: '',
      telephone: '',
      email: '',
      nationality: '',
      home_towm: '',
      subscribers: []
    }
    
  },

  methods: {
    addSubscriber(){
      var subscriber = {
        _id: new Date().toISOString(),
        first_name: this.first_name,
        last_name: this.last_name,
        dob: this.dob,
        gender: this.gender,
        telephone: this.telephone,
        email: this.email,
        nationality: this.nationality,
        home_towm: this.home_towm,
        completed: false
      };
      var that = this;

      db.put(subscriber, function callback(err, result) {

        // that.getSubscribers();
        
        if (!err) {
          console.log('Successfully updated a subscriber!');
          
          $.uiAlert({
            textHead: 'New Subscriber Created Successfully!',
            text: 'New Record created',
            bgcolor: '#19c3aa',
            textcolor: '#fff',
            position: 'top-right', // top And bottom ||  left / center / right
            icon: 'checkmark box',
            time: 3
            });
        }
      });
    },
    // getSubscribers() {
    //   var that = this;

    //   db.allDocs({include_docs: true, descending: true}, function(err, subscriber){
    //         that.subscribers = subscriber.rows
    //     });
    // },
    // deleteSubscriber(subscriber) {
    //   db.remove(subscriber);
    //   console.log("deleted Successfully!");
    //   this.getSubscribers();
    // }
  },
  mounted(){
    // this.getSubscribers();
      
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
