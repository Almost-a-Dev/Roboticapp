import React, { Component, Fragment } from 'react';

class Robot extends Component {
    render() {
        const { id, name, email } = this.props;
        return (
            <Fragment>
                <img src={`https://robohash.org/${id}?200x200`} alt={`${name} Robot`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </Fragment>
        )
    }
}

export default Robot;