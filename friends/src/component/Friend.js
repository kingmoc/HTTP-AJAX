import React from 'react';
import axios from 'axios'

const Friend = (props) => {
	console.log(props.friend.id)

	const toEditFriend = e => {
		e.preventDefault();
		props.history.push(`/friend${e.target.name}/edit`)
	}

	const deleteFriend = e => {
		e.preventDefault();

		axios.delete(`http://localhost:5000/friends/${props.friend.id}`) 
		.then((res) => {
			console.log(res)
		})
		.catch((err) => {
			console.log(err)
		}) 
		alert("Sure you want to Delete?")
		window.location.reload()
	}

			return (
				<div className="friend-card">
					<h2> Name: {props.friend.name.toUpperCase()} </h2>
					<h3> Age: {props.friend.age} </h3>
					<h4> <span>Email:</span> {props.friend.email} </h4>
					<div>
						<button name={props.friend.id} onClick={toEditFriend} className="ed"> Edit </button>
						<button onClick={deleteFriend} className="del"> Delete </button>
					</div>
				</div>
			)
		};

export default Friend;