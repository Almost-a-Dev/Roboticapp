import React from 'react';

const InputForm = ({ searchTerm, inputChange }) => {
    return ( 
        <div className='pa3'>
            <input type='search' placeholder='busca un robot...' className='tc br3 bc--green pa2 ba b--green bg-skyblue' onChange={inputChange}/>
        </div>
    );
}
 
export default InputForm;