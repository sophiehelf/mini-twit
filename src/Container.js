import React, { Component } from 'react'
import TweetBox from './TweetBox'

class Container extends Component {
	constructor(props) {
		super(props)

	}

	render() {
		return(
			<div>
			<p>-------------</p>
			<div>TWITTER DOT COM. I LIVE FOR THIS</div>
			<p>-------------</p>
			<br />
			<TweetBox />
			</div>
		)
	}
}

export default Container