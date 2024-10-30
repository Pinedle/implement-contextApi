"use client";
import React, { useContext } from 'react';
import { TextField, Button } from '@mui/material';
import { UserContext } from '../context/UserContext';
import styles from '../components/UserForm.module.css';

export default function UserForm() {
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Created:', user);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <TextField
        name="name"
        label="Name"
        value={user.name}
        onChange={handleChange}
        margin="normal"
        fullWidth
        className={styles.inputField}
      />
      <TextField
        name="email"
        label="Email"
        value={user.email}
        onChange={handleChange}
        margin="normal"
        fullWidth
        className={styles.inputField}
        
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        value={user.password}
        onChange={handleChange}
        margin="normal"
        fullWidth
        className={styles.inputField}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </form>
  );
}
