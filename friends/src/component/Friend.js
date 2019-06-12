import React from 'react';

const Friend = (props) => {
	// console.log(props.friend.id)

	const toEditFriend = e => {
		e.preventDefault();
		// console.log(e.target.name)
		// console.log(props.history)
		props.history.push(`/friend${e.target.name}/edit`)
	}

			return (
				<div className="friend-card">
					<h2> Name: {props.friend.name.toUpperCase()} </h2>
					<h3> Age: {props.friend.age} </h3>
					<h4> <span>Email:</span> {props.friend.email} </h4>
					<div>
						<button name={props.friend.id} onClick={toEditFriend} className="ed"> Edit </button>
						<button className="del"> Delete </button>
					</div>
				</div>
			)
		};

export default Friend;