import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import Header from '../../components/Header';
import { addProductToCart } from '../../store/actions';

class Home extends Component {
  render() {
    return (
      <>
        <Header cartItemNumber={this.props.cartItemCount} />

        <ul className="product-list">
          {this.props.allProducts.map(product => (
            <li className="product-list__li" key={product.id}>
              <div className="product-list__item">
                <img src={product.image} alt="img" />
                <strong className="product-list__strong">{product.title}</strong><span className="product-list__price">€{product.price}</span>
              </div>
              <div className="product-list__btn-container">
                <button className="product-list__btn" onClick={this.props.addItem.bind(this, product)}>
                  <span className="product-list__btn-span">Add to Cart</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
  }
};

const mapStateToProps = state => {
  return {
    allProducts: state.products,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: product => dispatch(addProductToCart(product))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
