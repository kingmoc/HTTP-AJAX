import React, { Component } from 'react';

class EditFriendForm extends Component {

	toHome = e => {
		e.preventDefault();
		// console.log(this.props.history)
		this.props.history.push('/')
	}	


	render() {
		// console.log(this.props.match.params.id)
		// console.log(this.props.friendsList.id)
		// console.log(this.props.friendsList)

		let newArray = this.props.friendsList.filter(friend => friend.id == this.props.match.params.id)
		console.log(newArray)

		return (
			
			newArray.map(friend => {
				return (
					<div className="friend-card" key={friend.id}>
						<form method="post" className="form-info" onSubmit={this.addFriend}>
							<h1 className="form-title"> Edit Friend </h1>
							<h2> Name: </h2> 
							<input 
							type="text" 
							value={friend.name.toUpperCase()}
							name="name"
							// onChange={this.handleChanges}
							/>
							<h3> Age: </h3>
							<input 
							type="text" 
							value={friend.age}
							name="age"
							// onChange={this.handleChanges}
							/>
							<h4> <span>Email:</span> </h4>
							<input 
							type="text" 
							value={friend.email}
							name="email"
							// onChange={this.handleChanges}
							/>
							<div className="friend-card-buttons">
								<button className="con"> Confirm </button>
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