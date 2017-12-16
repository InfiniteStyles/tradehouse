import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/customer/CartItem.jsx';
import { removeFromCart, fetchCart, decreaseQuantityInCart, increaseQuantityInCart } from '../actions/cartActions.jsx';

import { connect } from 'react-redux';

// TODO: pass in customer Id for Link route
class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  render() {
    let totalCost = 0;
    this.props.cart.forEach((item) => {
      totalCost += item.quantity * item.unitPrice;
    });
    return (
      <div>
        <ol>
          Current Cart: {this.props.cart.map((product, index) => (<CartItem product={product} key={index} removeFromCart={this.props.removeFromCart} increaseQuantityInCart={this.props.increaseQuantityInCart} decreaseQuantityInCart={this.props.decreaseQuantityInCart} />))}
        </ol>
        <br />
        Total Price: ${parseFloat(totalCost).toFixed(2)}
        <Link to={`/checkout/${1}`}>
          <button>Checkout</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  removeFromCart, fetchCart, decreaseQuantityInCart, increaseQuantityInCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);