import React from 'react';
import Robot from './Robot';

const CardList = ({robots}) => {
    return (
        robots.map((robot, idx) => {
            return <Robot id={robots[idx].id} name={robots[idx].name} email={robots[idx].email} />
        })
    );
}
 
export default CardList;