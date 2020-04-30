import React from 'react';


export default class FormThree extends React.Component{
    handleChange(event){
        let id = event.target.id;
        this.props.user[id] = event.target.value
    }

    render(){
        return(
            <div>   
                <div className='row'>
                    <div className = 'col-md-2 offset-md-3'>
                        <label for='creditCard'>Credit Card</label>
                    </div>
                    <div className = 'col-md-2'>
                        <input className = 'form-control' type='text' name='creditCard' id='creditCard' onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className = 'col-md-2 offset-md-3'>
                        <label for='expiryDate'>Expiry Date</label>
                    </div>
                    <div className = 'col-md-2'>
                        <input className = 'form-control' type='text' name='expiryDate' id='expiryDate' onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className = 'col-md-2 offset-md-3'>
                        <label for='CVV'>CVV</label>
                    </div>
                    <div className = 'col-md-2'>
                        <input className = 'form-control' type='text' name='CVV' id='CVV' onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className = 'col-md-2 offset-md-3'>
                        <label for='billingZipCode'>Billing Zip Code</label>
                    </div>
                    <div className = 'col-md-2'>
                        <input className = 'form-control' type='text' name='billingZipCode' id='billingZipCode' onChange={this.handleChange.bind(this)}/>
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

