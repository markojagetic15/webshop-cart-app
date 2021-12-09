<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <h4>{{ productItem.title }}</h4>
        <br />
        <img :src="productItem.image_tag" :alt="productItem.title" />
        <br />
        <p class="price">
          <strong>{{ productItem.price }}&euro;</strong>
        </p>
        <a class="button" @click="addCartItem(productItem)">
          <strong>Add to Cart</strong>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ProductListItem",
  props: ["productItem"],
  methods: {
    ...mapActions(["addCartItem"]),
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  text-align: center;
}
.card:hover {
  transition: 0.2s;
  transform: scale(1.05);
  border-radius: 25px;
}
.button {
  border: none;
  background-color: #4bddd3;
  color: #1e5753;
}
.button:hover {
  background-color: #4bddd3;
  opacity: 0.5;
}
.price {
  font-size: 150%;
  margin-top: 15px;
}
</style>
