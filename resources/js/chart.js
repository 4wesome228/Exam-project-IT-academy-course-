
var Cart = document.querySelector(".cart-container");
var CartItems = document.getElementsByClassName("cart-items")[0];
var removeItemButton = document.getElementsByClassName("btn-danger");
var smallCart = document.getElementsByClassName("small-cart")[0];
var addButton = document.getElementsByClassName("cart-btn");

/*window.onresize = function (event) {
  if (window.innerWidth < 768) {
    Cart.style.display = "none";
  }
};
*/
for (var i = 0; i < removeItemButton.length; i++) {
  removeItemButton[i].addEventListener("click", removeItem);
}
var QuantityInput = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < QuantityInput.length; i++) {
  QuantityInput[i].addEventListener("change", QuantityChanged);
}

for (var i = 0; i < addButton.length; i++) {
  if (window.innerWidth > 768) {
    addButton[i].addEventListener("click", addToCartClicked);

  }
  if (window.innerWidth < 768) {

    var count = 0;
    addButton[i].addEventListener("click", function () {
      smallCart.classList.add("visible");
      count++;
      if (count > 3) { alert("You have already added 3 items"); return; }

      if (count === 1) smallCart.classList.add("one");

      if (count === 2) { smallCart.classList.remove("one"); smallCart.classList.toggle("two"); }
      if (smallCart.className == "small-cart visible one" && count != 1) { alert("You have already added this item"); return; }
      if (count === 3) { smallCart.classList.remove("one"); smallCart.classList.remove("two"); smallCart.classList.toggle("three"); }


    })
  }
}



function addToCartClicked(e) {
  Cart.classList.add("visible");
  var Item = document.getElementsByClassName("slideshow-container show")[0];
  var title = Item.getElementsByClassName("title")[0].innerText;
  var price = Item.getElementsByClassName("Summary-price")[0].innerText;
  console.log(title, price);
  addItemToCart(title, price);
}

function addItemToCart(title, price) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItemNames = CartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("You have already added this item");
      return;
    }
  }
  var cartRowContent = '<div class="cart-item cart-column">' +
    '<span class="cart-item-title">' + (title) + '</span>' +
    '</div>' + '<span class="cart-price cart-column">' + price + '</span>' +
    '<div class="cart-quantity cart-column">' +
    '<input class="cart-quantity-input" type="number" value="1" />' +
    '<button class="btn btn-danger" type="button">Remove</button>' +
    '</div>' +
    '</div>'
    ;
  cartRow.innerHTML = cartRowContent;
  CartItems.appendChild(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", QuantityChanged);
  updateCartTotal();
}

function QuantityChanged(e) {
  if (isNaN(this.value) || this.value <= 0) this.value = 1;
  updateCartTotal();
}

function removeItem(e) {

  this.parentElement.parentElement.remove();
  updateCartTotal();
}

function updateCartTotal() {
  var cartItem = document.getElementsByClassName("cart-items")[0];
  cartRows = cartItem.getElementsByClassName("cart-row");
  var totalPrice = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var Price = cartRows[i]
      .getElementsByClassName("cart-price")[0]
      .innerText.replace("$", " ");



    var Quantity = cartRows[i].getElementsByClassName("cart-quantity-input")[0]
      .value;
    totalPrice += Price * Quantity;
  }
  document.getElementsByClassName("price")[0].innerText = totalPrice + "$";
}
