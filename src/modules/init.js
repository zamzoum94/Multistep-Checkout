import React from 'react';


export default class Init extends React.Component{
    constructor(props){
        super();
        this.props = props;
        this.state = {
            curr : 4
        }
    }

    render(){
        return(
            <div>   
               <div className='row'>
                    <div className='col-md-2 offset-md-4'>
                        <button type="button" className="btn btn-primary" onClick={this.props.next}>Create a purchase</button>
                    </div>
               </div>
            </div>
        )
    }
}

