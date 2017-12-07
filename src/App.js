import React, {Component} from 'react';
import logo from './logo.svg';
import TimestampLabel from "./TimestampLabel";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelValue: "Hier komt de tijd"
        };
    }

    getTimestamp() {
        this.setState({labelValue: Date.now()});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.

                    <br/>
                    <button onClick={this.getTimestamp.bind(this)}>Geef mij de tijd</button>
                    <br/>
                    <TimestampLabel labelValue={this.state.labelValue}/>
                </p>
            </div>
        );
    }
}

export default App;
