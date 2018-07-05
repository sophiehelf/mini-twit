import React, {Component} from 'react'


class TweetList extends Component {
	constructor(props) {
		super(props)
	}

	retweet = () => {
		this.setState({
			tweets: [this.props.tweets, ...this.props.tweetList]
		})
	}

	render() {
		return (
			<div className="tweet">
				<p>{this.props.tweets}</p>
				<p>{this.props.username}</p>
				<button>Retweet</button>
			</div>
		)
	}
}

export default TweetList