<template>
  <div class="agentdashboard">

    
   <div class="ui horizontal list" style="padding:20px 20px; color:#828282; display: flex; justify-content: center;">
            <div class="buttons" style="padding: 10px; ">
            <a href="/user/agent/add-subscriber">
                    <button class="ui labeled icon green big fluid button"  style="margin-bottom: 10px;">
                        <i class="add icon"></i>
                        Add Subscriber
                    </button>
                    </a>
                    <!-- <button class="ui labeled icon green big fluid button"  style="margin-bottom: 10px;">
                        <i class="eye icon"></i>
                        View Subscriber
                    </button> -->
                    <a href="/settings">
                    <button class="ui labeled icon blue big fluid button"  style="margin-bottom: 10px;">
                        <i class="cog icon"></i>
                        Settings
                    </button>
                    </a>
                    <a href="/settings">
                    <button class="ui labeled icon red big fluid button"  style="margin-bottom: 10px;">
                        <i class="lock icon"></i>
                        Sign Out
                    </button>
                    </a>
            </div>
        </div>

    
  </div>
</template>

<script>
  
export default {
  name: 'Agents',
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
