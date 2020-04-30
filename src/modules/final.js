import React from 'react';
import { json } from 'body-parser';


export default class Final extends React.Component{
    constructor(props){
        super();
        this.props = props;
        console.log(props)
    }

    handleEvent(event){
        this.props.handleSubmit(event);
        this.props.next();
    }

    render(){
        return(
            <div>   
               <div className='row'>
                    <div className='col-md-2 offset-md-3'>
                        <button type="button" className="btn btn-danger" onClick={this.props.next}>Cancel</button>
                    </div>
                    <div className='col-md-2 offset-md-1'>
                        <button type="submit" className="btn btn-success" onClick={this.handleEvent.bind(this)}>Purchase</button>
                    </div>
               </div>
            </div>
        )
    }
}

