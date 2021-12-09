<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <p v-if="!cartItems.length" class="cart-empty-text has-text-centered">
      Add some items to the cart!
    </p>
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
    </ul>
    <br />
    <div class="buttons">
      <button class="button is-danger is-outlined" @click="removeAllCartItems">
        <span>Delete All items</span>
      </button>
      <br />
      <router-link to="/email-input">
        <button :disabled="!cartItems.length" class="button is-info">
          Proceed to checkout (<span class="has-text-weight-bold"
            >{{ cartTotal }} &euro;</span
          >)
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CartListItem from "./Cart_List_Item";
export default {
  name: "CartList",
  components: {
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity"]),
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    ...mapActions(["removeAllCartItems", "addPromotion"]),
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
.buttons .button:not(:last-child):not(.is-fullwidth) {
  margin-right: 0.5rem;
}
.buttons .button {
  margin-bottom: 0;
  border-radius: 10px;
}
</style>
