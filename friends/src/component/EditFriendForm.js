import React, { Component } from 'react';
import axios from 'axios'

class EditFriendForm extends Component {

	state = {
		editFriend: {
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
	
	componentDidMount() {
		this.setState({
			editFriend: {
				id: Math.floor(Math.random() * (92) + 8),
				name: this.props.friendsList[this.props.match.params.id -1].name,
				age: this.props.friendsList[this.props.match.params.id -1].age,
				email: this.props.friendsList[this.props.match.params.id -1].email
			}
		})
	}

	editFriend = e => {
		e.preventDefault();
		console.log(this.state.editFriend.name)

		axios.put(`http://localhost:5000/friends/${this.props.match.params.id}`, this.state.editFriend) 
			.then((res) => {
				this.props.editUpdate(res.data)
				this.props.history.push('/')
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			}) 
	}

	handleChanges = e => {
		// console.log(e.target.name)
		// console.log(e.target.value)
		this.setState({
			editFriend: { 
				...this.state.editFriend,
				[e.target.name]: e.target.value
			}			
		});
	
	}


	render() {

		let newArray = this.props.friendsList.filter(friend => friend.id == this.props.match.params.id)
		console.log(newArray)

		return (
			
			newArray.map(friend => {
				return (
					<div className="friend-card" key={friend.id}>
						<form method="update" className="form-info" onSubmit={this.editFriend}>
							<h1 className="form-title"> Edit Friend </h1>
							<h2> Name: </h2> 
							<input 
							type="text" 
							value={this.state.editFriend.name}
							//value={friend.name.toUpperCase()}
							name="name"
							onChange={this.handleChanges}
							/>
							<h3> Age: </h3>
							<input 
							type="text" 
							value={this.state.editFriend.age}
							//value={friend.age}
							name="age"
							onChange={this.handleChanges}
							/>
							<h4> <span>Email:</span> </h4>
							<input 
							type="text" 
							value={this.state.editFriend.email}
							//value={friend.email}
							name="email"
							onChange={this.handleChanges}
							/>
							<div className="friend-card-buttons">
								<button onClick={this.editFriend} className="con"> Confirm </button>
								<button onClick={this.toHome} className="back"> Back </button>
							</div>
						</form>
					</div>
				)
			})

		);
	}
}

export default EditFriendForm;