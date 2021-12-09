<template>
  <div class="row">
    <div class="col-75">
      <div class="container">
        <form action="./action.php" @submit="handler">
          <div class="row">
            <div class="col-50">
              <h3>Billing Address</h3>
              <label for="fname"><i class="fa fa-user"></i> Full Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Ivan Horvat"
                required
              />
              <label for="email"><i class="fa fa-envelope"></i> Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="ivan.horvat@example.com"
                required
              />
              <label for="adr"
                ><i class="fa fa-address-card-o"></i> Address</label
              >
              <input
                type="text"
                id="adr"
                name="address"
                placeholder="Unska 3, 10000 Zagreb"
                required
              />
              <label for="city"><i class="fa fa-institution"></i> City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Zagreb"
                required
              />

              <div class="row">
                <div class="col-50">
                  <label for="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Croatia"
                    required
                  />
                </div>
                <div class="col-50">
                  <label for="zip">Zip</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="10000"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="col-50">
              <h3>Payment</h3>
              <label for="fname">Accepted Cards</label>
              <div class="icon-container">
                <i class="fa fa-cc-visa" style="color:navy;">Visa</i>
                <i class="fa fa-cc-amex" style="color:blue;">Amex</i>
                <i class="fa fa-cc-mastercard" style="color:red;">Mastercard</i>
                <i class="fa fa-cc-paypal" style="color:blue;">Paypal</i>
              </div>
              <label for="cname">Name on Card</label>
              <input
                type="text"
                id="cname"
                name="cardname"
                placeholder="Ivan Horvat"
                required
              />
              <label for="ccnum">Credit card number</label>
              <input
                type="text"
                id="ccnum"
                name="cardnumber"
                placeholder="1111-2222-3333-4444"
                required
              />
              <label for="expmonth">Exp Month</label>
              <input
                type="text"
                id="expmonth"
                name="expmonth"
                placeholder="September"
                required
              />
              <div class="row">
                <div class="col-50">
                  <label for="expyear">Exp Year</label>
                  <input
                    type="text"
                    id="expyear"
                    name="expyear"
                    placeholder="2022"
                    required
                  />
                </div>
                <div class="col-50">
                  <label for="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="352"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Continue to checkout"
            class="btn"
            @click="removeAllCartItems"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handler() {
      this.$router.push({ name: "bought" });
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial;
  font-size: 17px;
  padding: 8px;
}

* {
  box-sizing: border-box;
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -16px;
  border-radius: 10px;
  padding: 20px;
}

.col-25 {
  -ms-flex: 25%;
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%;
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%;
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.container {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 10px;
}

input[type="text"] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
  border-radius: 10px;
}
.fa {
  padding: 10px;
}

.btn {
  background-color: #45a29e;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  cursor: pointer;
  font-size: 17px;
  border-radius: 10px;
}

.btn:hover {
  background-color: #66fcf1;
  border-radius: 25px;
  color: black;
}

a {
  color: #2196f3;
}

hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}
@media (max-width: 800px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-25 {
    margin-bottom: 20px;
  }
}
</style>
