// rcc
import React, { Component } from 'react';
import User from './User';

class Home extends Component {
    // conc
    constructor(props, context) {
        super(props, context);
        // est
        this.state = {
           users: [] ,
           cart: []
        };
        // bnd
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }


    handleAddToCart(user){
        console.log('this is my state', this.state)
        const newCart = [...this.state.cart, user]
        this.setState({cart: newCart});
        // console.log(user);
    }

    // cdm
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
                        //  sst
        .then(data => this.setState({users: data}))
    }
    
    render() {
        return (
            <div>
                <h2>Users Available: {this.state.users.length}</h2>
                <h3>User added in the cart: {this.state.cart.length}</h3>
                {
                    this.state.users.map(user => <User user={user} handleAddToCart={this.handleAddToCart}></User>)
                }
            </div>
        );
    }
}

export default Home;
