import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import LoginForm from './LoginForm';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Greeting name="Ahmed" />
                <Greeting name="Shifa" message="Welcome back!" />
                <Greeting name="there" message="Good to see you!" />

            </header>
        </div>
    );
}

export default App;
