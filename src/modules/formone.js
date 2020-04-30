import React from 'react';


export default class FormOne extends React.Component{
    constructor(props){
        super();
        this.props = props;
        console.log(props)
    }

    handleChange(event){
        let id = event.target.id;
        this.props.user[id] = event.target.value
    }

    render(){
        return(
            <div>   
                <div className='row'>
                    <div className = 'col-md-2 offset-md-3'>
                        <label for='name'>Name</label>
                    </div>
                    <div className = 'col-md-2'>
                        <input className = 'form-control' type='text' name='name' id='name' onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className = 'col-md-2 offset-md-3'>
                        <label for='email'>Email</label>
                    </div>
                    <div className = 'col-md-2'>
                        <input className = 'form-control' type='email' name='email' id='email' onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className = 'col-md-2 offset-md-3'>
                        <label for='pass'>Password</label>
                    </div>
                    <div className = 'col-md-2'>
                        <input className = 'form-control' type='password' name='pass' id='pass' onChange={this.handleChange.bind(this)}/>
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

