import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TravelPackages from './components/TravelPackages';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      setLoading(false); // Once user state is set, setLoading to false
    }, error => {
      setError(error); // Handle any authentication errors
      setLoading(false); // Ensure loading state is turned off in case of error
    });

    return () => {
      unsubscribe(); // Cleanup function to unsubscribe from auth state changes
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optional: Show loading indicator while checking auth state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Optional: Display error message if authentication fails
  }

  return (
    <div>
      <Header />
      <HeroSection />
      {user ? (
        <>
          <TravelPackages />
          <BookingForm />
        </>
      ) : (
        <Login />
      )}
      <Footer />
    </div>
  );
}

export default App;
