var AddTo = require('./phd.cart.add_to.js');
var HoldingCart = require('./phd.cart.holding.js');

var PhdCart = function () {
  this.cart_action_ele = $('[data-phd-add-to]');
  
  this.holding_cart = new HoldingCart();
  
  this._init_cart_actions();
};

PhdCart.prototype._init_cart_actions = function () {
  var _this = this;
  // make each cart action on the page an AddTo class
  _this.cart_action_ele.each(function () {
    var cart_action = new AddTo(this);
    
    cart_action.on('addTo', function (action, variant_id) {
      
      switch (action) {
        case 'holding':
          _this.holding_cart.add_product(variant_id);
          break;
        
        case 'cart':
          break;
      }
    });
  });
};

module.exports = PhdCart;