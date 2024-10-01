import React, { Component } from 'react';

class EVENT_HANDLING extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changeValue:''
      }
    }
    

   onChangeHandle =(e)=>{
        this.setState({
            changeValue : e.target.value
        })
        
    }
    render() {
        return (
            <div>
                <h1>EVENT_HANDLING</h1>
                <input type="text" onChange={this.onChangeHandle} />
                <p>{this.state.changeValue}</p>
            </div>
        );
    }
}

export default EVENT_HANDLING;