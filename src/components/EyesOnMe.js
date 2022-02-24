import React from 'react';

function EyesOnMe () {
    
    function blurCallback (){
        console.log("Hey! Eyes on me!")
    }
    function focusCallback (){
        console.log("Good!")
    }

    return(
        <button onBlur={blurCallback} onFocus={focusCallback}>
            Eyes on me
        </button>
    );
}

export default EyesOnMe;
