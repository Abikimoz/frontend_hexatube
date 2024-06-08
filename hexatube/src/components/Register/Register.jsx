import React, { useState } from 'react';
import axios from '../services/api';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/register', { email, password });
            history.push('/login'); // Redirect to login after successful registration
        } catch (error) {
            console.error('Error registering', error);
            alert('Failed to register');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Register</button>
        </form>
    );
};
