import React from 'react';

function Keypad () {
    function changeCallback () {
    console.log("Entering password...");
    }
    return(
        <input type="password" onChange={changeCallback}>
        
        </input>
    );
}

export default Keypad;