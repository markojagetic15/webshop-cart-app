<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <h1>Items you bought</h1>
    </div>
    <br />
    <br />
    <ul>
      <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
        <CartListItem :cartItem="cartItem" />
        <br />
      </li>
      <div class="notification">
        <p>
          Total Quantity:
          <span class="has-text-weight-bold">{{ cartQuantity }}</span>
        </p>
      </div>
      <br />
    </ul>
    <span class="has-text-weight-bold" id="total"
      >Total : {{ cartTotal }} &euro;</span
    >
    <div class="buttons">
      <br />
      <br />
      <br />
      <router-link to="/inventory">
        <button class="button is-info" @click="removeAllCartItems">
          Shop some more
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CartListItem from "./Checkout-items.vue";
import Navbar from "../core/NavBar.vue";
export default {
  name: "CartList",
  components: {
    CartListItem,
    Navbar,
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity"]),
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    ...mapActions(["removeAllCartItems"]),
  },
};
</script>
<style scoped>
.notification {
  background-color: #2ad1b2;
  color: white;
  border-radius: 10px;
  border: none;
}
.box {
  border-radius: 10px;
}
.button {
  border-radius: 15px;
}
#total {
  color: #2ad1b2;
  font-size: 45px;
}
</style>
