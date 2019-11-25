import React, { useEffect, useState } from 'react';
import './App.css';
import { useForm, useFetch } from './useForm';

const  App = () => {
    const [ values, handleChange ] = useForm({
        email: '',
        password: '',
        firstName: '',
    });

    const initCount = JSON.parse(localStorage.getItem('count'));
    const [ count, setCount ] = useState(initCount ? initCount : 0);
    const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count]);

    return (
        <div className="App">
            <div>
                {
                    !data ? 'loading...' : data
                }
            </div>
            <button onClick={() => setCount(c => c + 1)}>+</button>
            <button onClick={() => setCount(c => c - 1)}>-</button>
            <input
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            <input
                name="firstName"
                placeholder="first name"
                value={values.firstName}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
            />
        </div>
    );
}

export default App;
