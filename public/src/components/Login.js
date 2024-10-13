import React from 'react';
import { auth, googleProvider } from '../firebase';

function Login() {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}

export default Login;
