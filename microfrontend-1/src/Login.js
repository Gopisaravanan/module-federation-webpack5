import React from 'react';

const Login = () => {

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        style={styles.input}
      />
      <button style={styles.button}>
        Login
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  input: {
    margin: '10px',
    padding: '10px',
    width: '200px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    width: '200px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Login;
