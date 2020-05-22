import React, { Component } from 'react'


class SignIn extends Component {
    state = { 
        email:'',
        password:null
     }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })

    }
    render() { 
        return ( 
            <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">
                    SignIn
                </h5>
                <div className="input-filed">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className="input-filed">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="input-filed">
                    <button className="btn pink lighten-1 z-depth-0">
                        Login
                    </button>
                </div>
            </form>
            </div>
         );
    }
}
 
export default SignIn;