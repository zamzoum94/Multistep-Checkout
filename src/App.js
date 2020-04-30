import React from 'react';
import FormOne from './modules/formone.js'
import FormTwo from './modules/formTwo.js'
import FormThree from './modules/formthree.js'
import Init from './modules/init.js'
import Final from './modules/final.js'
import { json } from 'body-parser';


class App extends React.Component{
  constructor(){
    super();
    this.user = {}
    this.state = {
      0 : <Init next={this.next.bind(this)}/>,
      1 : <FormOne next={this.next.bind(this)} user = {this.user}/>,
      2 : <FormTwo next={this.next.bind(this)} user = {this.user}/>,
      3 : <FormThree next={this.next.bind(this)} user = {this.user}/>,
      4 : <Final next={this.next.bind(this)} user = {this.user} handleSubmit={this.handleSubmit}/>,
      curr : 0,
    }
  }

  next(){
    let curr = this.state.curr + 1;
    if(curr > 4){
      curr = 0;
    }
    this.setState({
      curr : curr
    });
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.user)
    // ajax request 
    let data = JSON.stringify(this.user)
    alert('order submited');
    fetch('http://localhost:3000/order', {
      method : 'POST',
      body : data
    })
  }

  render(){
    return(
      <div className='container'>
        <form onSubmit={this.handleSubmit.bind(this)}> 
          <div className='form-group'>
            {this.state[this.state.curr]}
          </div>
        </form>
      </div>
    )
  }
}

export default App;
