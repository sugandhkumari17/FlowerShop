
    // Get the elements you need
    const cartBtns = document.querySelectorAll('.cart-btn');
    const cartItemCount = document.getElementById('count');
    const cardItemDiv = document.getElementById('cardItem');
    const totalDiv = document.getElementById('total');

    let cartCount = 0;
    let totalAmount = 0;

    // Function to update the cart count and display
    function updateCartCount() {
        cartItemCount.textContent = cartCount;
    }

    // Function to update the total amount in the card
    function updateTotalAmount(price) {
        totalAmount += price;
        totalDiv.innerHTML = `<h3>$${totalAmount.toFixed(2)}</h3>`;
    }

    // Add click event to each "add to cart" button
    cartBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Assuming the price is present in the DOM structure, you may need to adjust this based on your actual structure
            const priceElement = this.closest('.box').querySelector('.price');
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        // ... (existing code)
    
        // Function to update the card items display
        function updateCardItems(productBox) {
          const cartItem = productBox.cloneNode(true);
          cartItem.classList.add('cart-item');
          const removeBtn = document.createElement('button');
          removeBtn.textContent = 'Remove';
          removeBtn.className = 'remove-item-btn';
          removeBtn.addEventListener('click', function () {
            removeCartItem(cartItem);
          });
          cartItem.appendChild(removeBtn);
          cardItemDiv.appendChild(cartItem);
        }
    
        // Add click event to each "add to cart" button
        cartBtns.forEach(btn => {
          btn.addEventListener('click', function () {
            // Assuming the product box is the closest ancestor with a specific class, adjust based on your actual structure
            const productBox = this.closest('.box');
            if (productBox) {
              // Assuming the price and product name are present in the product box, adjust based on your actual structure
              const priceElement = productBox.querySelector('.price');
              const productName = productBox.querySelector('h3');
    
              if (priceElement && productName) {
                const price = parseFloat(priceElement.textContent.replace('$', ''));
                updateTotalAmount(price);
                updateCardItems(productBox);
              }
            }
            
            cartCount++;
            updateCartCount();
          });
        });  
});
    
// Function to toggle the cart visibility
// Assume you have a variable to track whether the cart is visible
var isCartVisible = false;

// Function to toggle the visibility of the cart section
function toggleCart() {
  // Get the cart section
  var cartSection = document.getElementById("card-item");

  // Toggle the visibility based on the current state
  if (isCartVisible) {
    cartSection.style.display = "none";
  } else {
    cartSection.style.display = "block";
  }
     
  // Update the state
  isCartVisible = !isCartVisible;
}

// Assuming you have a reference to the shopping cart icon
var cartIcon = document.querySelector(".fa-cart-shopping");

// Add a click event listener to the cart icon
cartIcon.addEventListener("click", toggleCart);

  