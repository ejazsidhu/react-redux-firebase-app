import React, { Component } from 'react'


class CreateProject extends Component {
    state = { 
        title:'',
        content:''
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
                    Create Project
                </h5>
                <div className="input-filed">
                    <label htmlFor="title">Project Title</label>
                    <input type="text" name="title" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-filed">
                    <label htmlFor="password">Content</label>
                    <textarea name="content" id="content" cols="30" rows="10" className="materialze-textarea" onChange={this.handleChange}></textarea>
                    {/* <input type="password" name="password" id="password" /> */}
                </div>
                <div className="input-filed">
                    <button className="btn pink lighten-1 z-depth-0">
                        Creat Project
                    </button>
                </div>
            </form>
            </div>
         );
    }
}
 
export default CreateProject;