import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component{
    constructor(){
        super()
        this.state = {
            fullName:'',
            userName:'',
            email:'',
            password:''
            }
        }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            userName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    
    render(){
        return (
            <div>
                <div className='container'>
                    <div className= 'form-div'>
                        <form>
                            <input type='text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className= 'form-contorl form-group'
                            />

                            <input type='text'
                            placeholder='Username'
                            onChange={this.changeUsername}
                            value={this.state.userName}
                            className= 'form-contorl form-group'
                            />

                            <input type='text'
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className= 'form-contorl form-group'
                            />

                            <input type='password'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className= 'form-contorl form-group'
                            />
                            <input type='submit' className='btn btn-danger btn-block' value='Sumbit'/>
                        

                        </form>
                        
                        
                    </div>

                </div>
            
            </div>
        );
    }
}

export default App;

