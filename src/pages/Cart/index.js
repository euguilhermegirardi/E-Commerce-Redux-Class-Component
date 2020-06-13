import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import Header from '../../components/Header';
import { removeProductFromCart } from '../../store/actions';

class Cart extends Component {
  render() {
    return (
      <>
        <Header cartItemNumber={this.props.cartItemCount} />
        {this.props.cartItems.length <= 0 && <p className="no-item">No item in the Cart!</p>}
        <ul className="list">
          {this.props.cartItems.map(cartItem => (
            <li className="list__item" key={cartItem.id}>
              <img className="list__img" src={cartItem.image} alt="img" />
              <strong className="list__strong">{cartItem.title}</strong> €{cartItem.price}
              <span className="list__qtd">Qty: {cartItem.quantity}</span>

              <button className="list__btn" onClick={this.props.removeItem.bind(this, cartItem.id)}>
                <span className="list__btn-span">Remove from Cart</span>
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => dispatch(removeProductFromCart(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
