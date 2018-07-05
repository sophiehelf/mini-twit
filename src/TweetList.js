import React, {Component} from 'react'


class TweetList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			tweetList: this.props.tweetList
		}
	}


	render() {
		return (
			<div className="tweet">
				<p>Jil Slander: {this.props.tweets}</p>
			</div>
		)
	}
}

export default TweetList