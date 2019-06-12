import React, { Component } from 'react';
import axios from 'axios'

class AddFriendForm extends Component {


	state = {
		newFriend: {
			id: Math.floor(Math.random() * (92) + 8),
			name: "",
			age: "",
			email: ""
		}
	}

	toHome = e => {
		e.preventDefault();
		// console.log(this.props.history)
		this.props.history.push('/')
	}

	handleChanges = e => {
		console.log(e.target.name)
		console.log(e.target.value)
		this.setState({
			newFriend: { 
				...this.state.newFriend,
				[e.target.name]: e.target.value
			}			
		});
	}

	addFriend = e => {
		e.preventDefault();

		axios.post('http://localhost:5000/friends', this.state.newFriend)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			}) 

		window.location.reload()
	}


	render() {
		return (
			<div className="form">
				<h1 className="form-title"> Add Friend </h1>
				<button onClick={this.toHome}> Back </button>

				<form method="post" className="form-info" onSubmit={this.addFriend}>

					<div>
						<h3> Name: </h3>
						<input 
						type="text" 
						value={this.state.newFriend.name}
						name="name"
						onChange={this.handleChanges}
						/>
					</div>

					<div>
						<h3> Age: </h3>
						<input 
						type="text" 
						value={this.state.newFriend.age}
						name="age"
						onChange={this.handleChanges}
						/>
					</div>

					<div>
						<h3> Email: </h3>
						<input 
						type="text" 
						value={this.state.newFriend.email}
						name="email"
						onChange={this.handleChanges}
						/>
					</div>

					<button> Add Friend </button>

				</form>

			</div>
		);
	}
}

export default AddFriendForm;