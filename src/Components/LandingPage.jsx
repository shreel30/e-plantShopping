import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to Paradise Nursery</h1>
        <p style={styles.description}>Where Green Meets Serenity. Transform your space with our beautiful collection of houseplants.</p>
        <Link to="/products">
          <button style={styles.button}>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")', // Example free image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center'
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px',
    borderRadius: '15px',
    maxWidth: '600px'
  },
  title: { fontSize: '3rem', marginBottom: '20px' },
  description: { fontSize: '1.2rem', marginBottom: '30px' },
  button: { padding: '12px 30px', fontSize: '1.2rem', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }
};

export default LandingPage;