import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { useForm } from '../hooks/useForm';
import { useFetch } from '../hooks/useFetch';
import Counter from './counter/Counter';

const  App = () => {
    const [ values, handleChange ] = useForm({
        email: '',
        password: '',
        firstName: '',
    });

    const initCount = JSON.parse(localStorage.getItem('count'));
    const [ count, setCount ] = useState(initCount ? initCount : 0);
    const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);

    const inputRef = useRef();

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count]);

    const onFocusClick = () => {
        inputRef.current.focus();
    };

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
                ref={inputRef}
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
            <button onClick={onFocusClick}>focus</button>
            <Counter />
        </div>
    );
}

export default App;
