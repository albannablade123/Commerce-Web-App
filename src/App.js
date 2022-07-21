import logo from './logo.svg';
import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { Products, Navbar, Cart, Checkout } from './components'
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [ products, setProducts] = useState([]);
  const [ cart, setCart ] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    
    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity ) => {
    const { cart } = await commerce.cart.update(productId, quantity);
    console.log(quantity);
    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } =  await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handleEmptyCart = async (productId) => {
    const { cart } = await commerce.cart.empty(productId);

    setCart(cart);
  }

  useEffect(() => {
      fetchProducts();
      fetchCart();
  }, []);

  return (
    <Router>
      <div>
      <Navbar totalItems={cart.total_items}/>
      <Routes>
        <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart}/>}/>

        <Route exact path="/cart" element={
          <Cart cart={cart} 
          handleRemoveFromCart={handleRemoveFromCart} 
          handleEmptyCart={handleEmptyCart} 
          handleUpdateCartQty={handleUpdateCartQty}/>
          }/>

        <Route exact path="/checkout" element={<Checkout cart={cart}/>}/>
      </Routes>
     
    </div>
    </Router>
    
  );
}

export default App;
/*<Products products={products} onAddToCart={handleAddToCart}/>*/
/*<Cart cart={cart}/>*/