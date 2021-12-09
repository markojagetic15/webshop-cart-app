<template>
  <div>
    <div class="box">
      <div class="cart-item__details">
        <img :src="cartItem.image_tag" :alt="cartItem.title" />
        <div class="text-button">
          <p class="is-inline">{{ cartItem.title }}</p>
          <br />
          <br />
          <span @click="addCartItem(cartItem)" class="quantity-button-add"
            >Quantity + 1</span
          >
          <span
            @click="removeCartItem(cartItem.id)"
            class="quantity-button-remove cart-item__modify"
            >Quantity - 1</span
          >
        </div>
        <div class="price">
          <span class="cart-item--price has-text-info has-text-weight-bold">
            {{ cartItem.quantity }} X {{ cartItem.price }}&euro;
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "CartListItem",
  props: ["cartItem"],
  methods: {
    ...mapActions(["addCartItem", "removeCartItem"]),
  },
};
</script>

<style scoped>
img {
  height: 6em;
  width: auto;
}
.text-button {
  position: absolute;
  left: 13em;
}
.is-inline {
  font-size: 2em;
}
.cart-item {
  border-radius: 10px;
}
.box {
  border-radius: 10px;
}
.quantity-button-add {
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  cursor: grab;
  background-color: #2ad1b2;
  color: white;
}
.quantity-button-add:hover,
.quantity-button-remove:hover {
  transition: 1s;
  opacity: 0.6;
  border-radius: 45px;
}
.quantity-button-remove {
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  cursor: grab;
  color: white;
  background-color: #fb5454;
}
.cart-item--price {
  display: flex;
  justify-content: flex-end;
  font-size: 200%;
  margin-top: 12.5%;
}
.cart-item__details {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 600px) {
  .cart-item--price {
    font-size: 125%;
  }
  .is-inline {
    font-size: 1em;
  }
}
</style>
