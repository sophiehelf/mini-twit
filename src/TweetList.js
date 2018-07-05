import React, {Component} from 'react'


const TweetList = (props) => {
	return (
		<div className="tweet">
			<p>{props.tweets}</p>
			<p>{props.username}</p>
		</div>
	)
}

export default TweetList