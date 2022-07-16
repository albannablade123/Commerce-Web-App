import logo from './logo.svg';
import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { Products, Navbar, Cart } from './components'
import { commerce } from './lib/commerce'

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
    const item = await commerce.cart.add(productId, quantity);
    
    setCart(item.cart)
  }

  useEffect(() => {
      fetchProducts();
      fetchCart();
  }, []);

  return (
    <div>
      <Navbar totalItems={cart.total_items}/>
      <Cart cart={cart} />
    </div>
  );
}

export default App;
/*<Products products={products} onAddToCart={handleAddToCart}/>*/
/*<Cart cart={cart}/>*/