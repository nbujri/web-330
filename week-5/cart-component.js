// ==========================================================
//     ; Title: Assignment 5.2
//     ; Author: Ngi Bujri
//     ; Date: 31 January, 2023
//     ; Description: app demonstrating JS iterators
// ==========================================================

// create custom cart component
class CartComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // font-awesome cart icon
    this.innerHTML = `<i id="carton" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
  }
}

customElements.define("cart-component", CartComponent);
