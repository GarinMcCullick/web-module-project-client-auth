import React from 'react';
import axios from 'axios';

class Login extends React.Component {

state = {
    info:{
        username:'Lambda School',
        password:'i<3Lambd4',
    }
}

handleChange = e => {
    this.setState({
        info:{
            ...this.state.info,
            [e.target.name]: e.target.value
        }
    });
}

login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', this.state.info)
    .then(res=>{
       //console.log('TOKEN POST',res.data.payload); //does get the data
        localStorage.setItem("token", res.data.payload);
        this.props.history.push('/friends')
    })
    .catch(err=>{
        console.log(err);
    })
}

render(){
    console.log("current state:",this.state) //makes sure that state updates as i type
    return(
        <div>
            <form onSubmit={this.login}>
                <input 
                    type="text"
                    name="username"
                    value={this.state.info.username}
                    onChange={this.handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    value={this.state.info.password}
                    onChange={this.handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    );
}
}

export default Login