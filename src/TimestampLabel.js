import React, { Component } from 'react';
import './App.css';

class TimestampLabel extends Component {
    render() {
        return (
            <label>{this.props.labelValue}</label>
        )
    }
}

export default TimestampLabel;