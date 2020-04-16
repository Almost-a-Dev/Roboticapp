import React, { Component } from 'react';
import './Robot.css'
class Robot extends Component {
    render() {
        const { id, name, email } = this.props;
        return (
            <div className='RoboCard'>
                <img src={`https://robohash.org/${id}?200x200`} alt={`${name} Robot`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default Robot;