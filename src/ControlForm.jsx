import React, {Component} from 'react';

class ControlForm extends Component {

    state = {
        cin: '',
        nom: '',
        prenom: '',
        date: ''
    }

    handleCin = () => {
        this.setState(prevState => {
            {cin : this.target.value}
        })
    }
    render(){
        return(
            <form>
                CIN:
                <input type='text' /><br/>
                Nom: <input type='text' /><br/>
                Prenom: <input type='text' /><br/>
                Date Naissance: <input type='date' /><br/>
                <input type='Submit' value='Envoyer'/>

            </form>
        )
            
        
    }
}

export default ControlForm;