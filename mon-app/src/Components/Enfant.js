import React from 'react';


const Child = (props) => {

    console.log(props.leState)
    let btnEnfant = props.leState.messageMaman !== null ? (<button onClick={props.functionReponse}>Repondre</button>) 
    : (<button disabled >Repondre</button>);
    return(
        <div>
            <h2>{props.name}</h2>
            {btnEnfant}
            <p>{props.leState.messageEnfant}</p>
        </div>
    );

}

export default Child;