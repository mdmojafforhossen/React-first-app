import React, { Component } from 'react';





class State extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }

      increament = () => {
        this.setState({
            count:this.state.count +1
        })
      }
      dicreament = () => {
        this.setState({
            count:this.state.count -1
        })
      }
      reset = () => {
        this.setState({
            count:0
        })
      }


    render() {
        const {count}=this.state;
        return (
            <div className='card'>
                <h1>Count: <span>{count}</span> </h1>
                
                <button onClick={this.dicreament} disabled={count===-5 ? true:false}>-</button>
                <button onClick={this.increament} disabled={count===5 ? true:false}>+</button>
                <button onClick={this.reset}>0</button>
            </div>
        );
    }
}

export default State;