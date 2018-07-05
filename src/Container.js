import React, { Component } from 'react'
import TweetBox from './TweetBox'
import TweetList from './TweetList'

class Container extends Component {
	constructor(props) {
		super(props)

	}

	render() {
		return(
			<div className="container">
			<div className="header">TWITTER DOT COM. I LIVE FOR THIS</div>
			<br />
			<TweetBox />
			</div>
		)
	}
}

export default Container