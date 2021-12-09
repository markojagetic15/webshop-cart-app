<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    v-if="['bought'].indexOf($route.name)"
  >
    <div class="navbar-brand">
      <img src="../../assets/kodi-logo1.png" alt="logo" class="logo" />
    </div>
    <div id="mySidebar" class="sidebar">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav"
        >&times;</a
      >
      <router-link to="/inventory">Shop</router-link>
      <router-link to="/cart" id="cart-button"
        ><p>
          Cart items:
          <span> {{ cartQuantity }}</span>
        </p>
      </router-link>
    </div>
    <div id="main">
      <button class="openbtn" @click="openNav">&#9776;</button>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link
              to="/inventory"
              class="button is-primary"
              @click="closeNav"
            >
              <strong>Shop</strong>
            </router-link>
            <router-link
              to="/cart"
              class="button is-warning"
              id="cart-button-large"
            >
              <p @click="closeNav">
                Cart items:
                <span> {{ cartQuantity }}</span>
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["cartQuantity"]),
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    },
    closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    },
  },
};
</script>
<style scoped>
.button {
  border-radius: 5px;
}
.button:hover {
  transition: 0.8s;
  border-radius: 35px;
}
.navbar {
  background-color: #1f2833;
}
.navbar-brand {
  font-size: 200%;
  color: white;
  font-weight: 600;
  letter-spacing: 10px;
  margin-left: 10px;
}
.logo {
  height: auto;
  width: 100px;
  margin: 0px;
}
SideBar h1 {
  color: white;
}

@media screen and (max-width: 700px) {
  .navbar-comp {
    display: none;
  }
  #mySidebar a {
    margin-left: 20px;
  }
}
@media screen and (min-width: 1000px) {
  #main {
    display: none;
  }
  .openbtn {
    display: none;
  }
  #mySidebar {
    display: none;
  }
  .navbar-comp {
    display: none;
  }
}
.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #0b0c10;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}
.sidebar a {
  padding: 8px 8px 8px 0px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
}
.sidebar a:hover {
  color: #66fcf1;
}
.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 0px;
}
.openbtn {
  position: absolute;
  right: 20px;
  top: 25px;
  font-size: 20px;
  cursor: pointer;
  background-color: #c5c6c7;
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
}
.openbtn:hover {
  background-color: #66fcf1;
}
/* #main {
  transition: margin-left 0.5s;
  display: flex;
  align-items: flex-start;
} */
</style>
