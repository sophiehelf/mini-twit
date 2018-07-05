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
			<p className="tweet">Jil Slander: {this.props.tweets}</p>
		)
	}
}

export default TweetList