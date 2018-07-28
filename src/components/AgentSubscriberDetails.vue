<template>
  <div class="agentdashboard">

      <div class="container" style="padding:50px">
        <div class="row">
            <div class="col-2">
            </div>

            <div class="col-8">
                <div class="card" style="padding:30px">

                      <div class="row">
                        <div class="col-sm-6">
                          <div class="row">
                          <div class="col-sm-4"><label>First Name:</label></div>
                          <div class="col-sm-8"><label class="label">{{subscriber.first_name}}</label> <input type="text" :value="subscriber.first_name" class="edit-input" /></div>
                          </div>
                          
                        </div>

                        <div class="col-sm-6">
                          <div class="row">
                          <div class="col-sm-4"><label>Last Name:</label></div>
                          <div class="col-sm-8"><label class="label">{{subscriber.last_name}}</label> <input type="text" :value="subscriber.last_name" class="edit-input" /></div>
                          </div>
                          
                        </div>

                        <div class="col-sm-6">
                          <div class="row">
                          <div class="col-sm-4"><label>Gender:</label></div>
                          <div class="col-sm-8"><label class="label">{{subscriber.gender}}</label> <input type="text" :value="subscriber.gender" class="edit-input" /></div>
                          </div>
                          
                        </div>
                        <div class="col-sm-6">
                          <div class="row">
                          <div class="col-sm-4"><label>Date of Birth:</label></div>
                          <div class="col-sm-8"><label class="label">{{subscriber.dob}}</label> <input type="text" :value="subscriber.dob" class="edit-input" /></div>
                          </div>
                          
                        </div>
                        
                      </div>
                        <hr>
                        <div class="row">
                        <div class="col-sm-6">
                          <div class="row">
                          <div class="col-sm-4"><label>Telephone:</label></div>
                          <div class="col-sm-8"><label class="label">{{subscriber.telephone}}</label> <input type="text" :value="subscriber.telephone" class="edit-input" /></div>
                          </div>
                          
                        </div>

                        <div class="col-sm-6">
                          <div class="row">
                          <div class="col-sm-4"><label>Email:</label></div>
                          <div class="col-sm-8"><label class="label">{{subscriber.email}}</label> <input type="text" :value="subscriber.email" class="edit-input" /></div>
                          </div>
                          
                        </div>

                        <div class="col-sm-6">
                          <div class="row">
                          <div class="col-sm-4"><label>Nationality:</label></div>
                          <div class="col-sm-8"><label class="label">{{subscriber.nationality}}</label> <input type="text" :value="subscriber.nationality" class="edit-input" /></div>
                          </div>
                          
                        </div>
                        <div class="col-sm-6">
                          <div class="row">
                          <div class="col-sm-4"><label>Home Town:</label></div>
                          <div class="col-sm-8"><label class="label">{{subscriber.home_towm}}</label> <input type="text" :value="subscriber.home_towm" class="ui  edit-input" /></div>
                          </div>
                          
                        </div>
                        
                      </div>
                        
                        
                </div>
            </div>
            <div class="col-2"></div>


        </div>
        <div class="row" style="padding:10px">
            <div class="col-10">

                <div class="ui button primary edit" style=" float:right; border-radius:100px">Edit</div>
                <div class="ui button success update" style=" float:right; border-radius:100px">Update</div>
                <div class="ui button danger cancel" style=" float:right; border-radius:100px">Cancel</div>
            </div>

        </div>

    </div>
    
  </div>
</template>

<script>

    
</script>

<script>
  
export default {
  name: 'AgentSubscriberDetails',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      id: '',
      subscriber: []
    }
    
    
  },
  methods: {
    getSubscriber(id) {
      var that = this;

      db.get(id).then(function (doc) {
        // handle doc
        console.log(doc);
        that.subscriber = doc;
      }).catch(function (err) {
        console.log(err);
      });

      // db.allDocs({include_docs: true, descending: true}, function(err, subscriber){
      //       that.subscribers = subscriber.rows
      //       console.log(that.subscribers);
      //   });
    },
  },
  mounted(){
    console.log(this.$route.params.id);
    this.getSubscriber(this.$route.params.id);

    $('.update').hide();
    $('cancel').hide();

    $('.edit').click(function () {
        
        $('.label').hide();
        $('.edit-input').show().focus();
        $('.update').show();
        $('cancel').show();
    });

    $('.cancel').click(function () {
        
        $('.label').show();
        $('.edit-input').hide();
        $('.update').hide();
        $('cancel').hide();
    });

    $('.update').click(function () {
        
        
    });

    }
 
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

.edit-input {
    display:none;

}

.update{
  display: none;
}

.cancel{
  display: none;
}
</style>
