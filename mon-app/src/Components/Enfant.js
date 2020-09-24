import React from 'react';


const Child = (props) => {

    const {name , functionReponse, leState} = props;
    
    let btnEnfant = leState.messageMaman !== null ? (<button onClick={functionReponse}>Repondre</button>) 
    : (<button disabled >Repondre</button>);
    return(
        <div>
            <h2>{name}</h2>
            {btnEnfant}
            <p>{leState.messageEnfant}</p>
        </div>
    );

}

export default Child;