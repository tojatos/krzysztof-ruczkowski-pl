import React, { Component } from 'react';

class Ninjas extends Component {
    render() {
        const { name, age, belt, id } = this.props;
        return (
            <div className="ninjas" key={id}>
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Belt: { belt }</div>
            </div>
        )
    }
}

export default Ninjas;