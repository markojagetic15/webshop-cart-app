<template>
  <div>
    <Navbar />
    <div class="container mt-6">
      <div class="columns">
        <div class="column is-12 column--align-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./components/core/NavBar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style>
html,
body {
  height: 100vh;
  background: #0b0c10;
}
html::-webkit-scrollbar {
  display: none;
}
html {
  -ms-overflow-style: none;
}
</style>
