import axios from 'axios';
import React from 'react';

class FriendsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        list: [],
        }
    }


    componentDidMount(){
        this.getData();
    }

    getData = () => {
        axios.get('http://localhost:5000/api/friends',{
            headers:{
                authorization: localStorage.getItem('token')
            }
        })
        .then(res=>{
            this.setState({list: res.data})
            console.log(this.state)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    

render(){ 
        return(
            <div>
                <h1>
                    Protected Friends List:
                </h1>
                <ol>
                    {this.state.list.map(list => 
                        <li key={list.id}>{list.name}</li>
                    )}
                </ol>
            </div>
        )
    }

}

export default FriendsList