import React, { Component } from 'react';
import axios from 'axios'

import Friend from "./Friend"


class FriendList extends Component {
	
	toForm = e => {
		e.preventDefault();
		console.log(this.props)
		this.props.history.push('/form')
	}

	render() {
		console.log(this.props.friendsList)
		return (
			<div className="container">
				<div className="title-top">
					<h1> List of Friends </h1> 
					<button onClick={this.toForm}>Add Friend</button>
				</div>
				{this.props.friendsList.map(friend => {
					return (
						<Friend {...this.props} key={friend.id} friend={friend}/>
					)
				})}
			</div>
		);
	}
}

export default FriendList;