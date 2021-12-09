<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="box">
      <div class="cart-item__details">
        <p class="is-inline">{{ cartItem.title }}</p>
        <div>
          <span class="cart-item--price has-text-info has-text-weight-bold">
            {{ cartItem.price }}&euro; X {{ cartItem.quantity }}
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
};
</script>

<style scoped>
.is-inline {
  font-size: 150%;
}
.cart-item {
  border-radius: 10px;
}
.box {
  border-radius: 10px;
}
</style>
