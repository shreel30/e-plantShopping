import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const products = [
  { id: 1, name: 'Snake Plant', price: 15, category: 'Air Purifying', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg' },
  { id: 2, name: 'Spider Plant', price: 12, category: 'Air Purifying', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg' },
  { id: 3, name: 'Peace Lily', price: 18, category: 'Air Purifying', image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg' },
  { id: 4, name: 'Boston Fern', price: 20, category: 'Air Purifying', image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg' },
  { id: 5, name: 'Rubber Plant', price: 25, category: 'Air Purifying', image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg' },
  { id: 6, name: 'Aloe Vera', price: 10, category: 'Medicinal', image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg' }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem({ name: product.name, image: product.image, cost: product.price }));
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Our Plants</h2>
      <div style={styles.grid}>
        {products.map(product => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <button 
              onClick={() => handleAddToCart(product)}
              disabled={cartItems.some(item => item.name === product.name)}
              style={{ ...styles.button, backgroundColor: cartItems.some(item => item.name === product.name) ? '#ccc' : '#4CAF50' }}
            >
              {cartItems.some(item => item.name === product.name) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '20px' },
  grid: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' },
  card: { border: '1px solid #ddd', borderRadius: '10px', padding: '15px', width: '250px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
  image: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' },
  button: { padding: '10px 20px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }
};

export default ProductList;