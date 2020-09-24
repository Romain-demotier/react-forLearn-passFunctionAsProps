import React from 'react';
import Child from "./Enfant"

class Maman extends React.Component{

    state ={
        messageMaman : null,
        messageEnfant : null 
    }
    donnerOrdre = ()=>{
        this.setState({messageMaman : "Va Ranger ta chambre"})
        }
   reponseEnfant = ()=>{
       this.setState({messageEnfant : "Dacords"})
   }

        render(){

            return(
                <React.Fragment>
                    <h1>Maman</h1>
                    <button onClick = {this.donnerOrdre}>Donner un ordre</button>
                    <p>{this.state.messageMaman}</p>
                        <hr />
                        <Child name='Damien' functionReponse = {this.reponseEnfant} leState ={this.state} />
                
                </React.Fragment>
            )
                
            
        }
        
};





export default Maman;