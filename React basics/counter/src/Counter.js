import React from 'react';
import logo from './logo.svg';
import Header from './Header';
class Counter extends React.Component {
    state = {
        count: 0,
        title: "COUNTER"
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return <div>
            <Header />
            <h1>{this.state.title}</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                count:{this.state.count}
            </p>
            <button className="btninc" onClick={this.increment} >Increment</button>
            <button className="btndec" onClick={this.decrement}>Decrement</button>
        </div>

    }
}

export default Counter;