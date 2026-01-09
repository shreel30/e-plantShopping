import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import { Link } from 'react-router-dom';

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((total, item) => total + (item.cost * item.quantity), 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h3>Your cart is empty</h3>
          <Link to="/products"><button style={styles.continueBtn}>Continue Shopping</button></Link>
        </div>
      ) : (
        <>
          <div style={styles.itemsContainer}>
            {cart.map(item => (
              <div key={item.name} style={styles.itemCard}>
                <img src={item.image} alt={item.name} style={styles.itemImage} />
                <div style={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p>${item.cost}</p>
                </div>
                <div style={styles.quantityControls}>
                  <button onClick={() => handleDecrement(item)} style={styles.qtyBtn}>-</button>
                  <span style={styles.qtyText}>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)} style={styles.qtyBtn}>+</button>
                </div>
                <div style={styles.itemTotal}>${item.cost * item.quantity}</div>
                <button onClick={() => handleRemove(item)} style={styles.deleteBtn}>Delete</button>
              </div>
            ))}
          </div>
          <div style={styles.summary}>
            <h3>Total Amount: ${totalAmount}</h3>
            <button style={styles.checkoutBtn} onClick={() => alert('Checkout functionality coming soon!')}>Checkout</button>
            <Link to="/products"><button style={styles.continueBtn}>Continue Shopping</button></Link>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: { padding: '20px' },
  itemsContainer: { maxWidth: '800px', margin: '0 auto' },
  itemCard: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ccc', padding: '15px 0' },
  itemImage: { width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' },
  itemDetails: { flex: 1, marginLeft: '20px' },
  quantityControls: { display: 'flex', alignItems: 'center', gap: '10px' },
  qtyBtn: { width: '30px', height: '30px', borderRadius: '50%', border: '1px solid #ccc', background: 'white', cursor: 'pointer' },
  qtyText: { fontSize: '18px', fontWeight: 'bold' },
  itemTotal: { fontWeight: 'bold', margin: '0 20px' },
  deleteBtn: { padding: '8px 15px', background: '#ff4444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  summary: { textAlign: 'center', marginTop: '30px' },
  checkoutBtn: { padding: '10px 20px', background: '#2E7D32', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' },
  continueBtn: { padding: '10px 20px', background: '#2E7D32', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }
};

export default CartItem;