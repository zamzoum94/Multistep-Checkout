import React from 'react';


export default class FormTwo extends React.Component{
    handleChange(event){
        let id = event.target.id;
        this.props.user[id] = event.target.value
    }

    render(){
        return(
            <div>   
                <div className='row'>
                    <div className = 'col-md-2 offset-md-3'>
                        <label for='adress'>Adress</label>
                    </div>
                    <div className = 'col-md-2'>
                        <input className = 'form-control' type='text' name='adress' id='adress' onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className = 'col-md-2 offset-md-3'>
                        <label for='city'>City</label>
                    </div>
                    <div className = 'col-md-2'>
                        <input className = 'form-control' type='text' name='city' id='city' onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className = 'col-md-2 offset-md-3'>
                        <label for='zipCode'>Zip Code</label>
                    </div>
                    <div className = 'col-md-2'>
                        <input className = 'form-control' type='text' name='zipCode' id='zipCode' onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className = 'col-md-2 offset-md-6'>
                    <button className ="btn btn-dark" onClick={this.props.next}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

