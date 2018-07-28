<template>
    <div class="" style=" background:#fff;">

    <div class="container" style="margin-top: 0; padding: 0; background:#fff;">

    <ul class="nav nav-tabs justify-content-left" style="background:#fff;">
        <div class="ui horizontal list" style="padding:20px 20px; color:#828282">
            <a href="/admin/dashboard" class="item">DASHBOARD</a>
            <a href="/admin/subscribers" class="item">SUBSCRIBER</a>
            <a href="/search" class="item">SEARCH</a>
            <a href="/settings" class="item">SETTINGS</a>

        </div>
    </ul>
  </div>
</div>
</template>

<script>

export default {
  name: 'AgentSubscribers',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      subscribers: []
    }
    
  }
 
}
</script>


