import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <Link to="/" style={styles.logo}>Paradise Nursery</Link>
      </div>
      <div style={styles.links}>
        <Link to="/products" style={styles.link}>Plants</Link>
        <Link to="/cart" style={styles.link}>
          <div style={styles.cartContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.cartIcon}>
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span style={styles.cartCount}>{totalItems}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', background: '#2E7D32', color: 'white' },
  logo: { fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: 'white' },
  links: { display: 'flex', gap: '20px', alignItems: 'center' },
  link: { textDecoration: 'none', color: 'white', fontSize: '18px' },
  cartContainer: { position: 'relative', display: 'flex', alignItems: 'center' },
  cartIcon: { width: '30px', height: '30px' },
  cartCount: { position: 'absolute', top: '-10px', right: '-10px', background: 'red', borderRadius: '50%', padding: '2px 6px', fontSize: '12px' }
};

export default Navbar;