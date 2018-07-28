<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#AE0725;">
        <div class="container">
        <a class="navbar-brand" href="#" style="color:#fff;">
                inHealth
                </a>
        <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>-->
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            </ul>
            <span class="navbar-text" style="color:#fff;">
                    Test <i class="angle down icon"></i>         
                    </span>
        </div>
      </div>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


nav {
  margin: 0;
  height: 80px;
  background-color: #35495E;
  color: #ffffff;
}


</style>
