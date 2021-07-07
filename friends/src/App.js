import React from 'react';
import './App.scss';
import axios from 'axios'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import FriendList from "./component/FriendList"
import AddFriendForm from "./component/AddFriendForm"
import EditFriendForm from "./component/EditFriendForm"

class App extends React.Component {

  state = {
		friendsList: []
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then(res => {
				console.log(res)
				this.setState(() => ({ friendsList: res.data }))
			})
			.catch(error => {
				console.log('Server Error', error)
			}) 
  }

  editUpdate = (newData) => {
    this.setState({
      friendsList: newData
    })
  }
  
 render() {
    return (
      <div className="App">

        {/* <FriendList /> */}
        {/* <EditFriendForm friendsList={this.state.friendsList} /> */}
    
        <Route exact 
        path="/" 
        render={props => (
          <FriendList 
          friendsList={this.state.friendsList}
          {...props}
          />
        )} />
        <Route 
        path="/form" 
        render={props => (
          <AddFriendForm
          addFriend={this.addFriend}
          len={this.state.friendsList.length} 
          {...props}        
          />
        )} />
        <Route 
        path="/friend:id/edit"
        render={props => (
          <EditFriendForm 
          editUpdate={this.editUpdate}
          friendsList={this.state.friendsList} 
          {...props}    
          />
        )}          
        />

      </div>
    );
  }
}

export default App;
