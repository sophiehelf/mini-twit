import React, { Component } from 'react'
import TweetList from './TweetList'

class TweetBox extends Component {
	constructor(props){
		super(props)
		this.textInput = React.createRef();

		this.state = {
			charsLeft: 140,
			tweets: ["this is a test tweet", "this is another test tweet"],
			username: "jil_slander"
		}
	}

	sendTweet = (e) => {
		e.preventDefault()
		console.log(this.textInput.current.value)
		if (this.textInput.current.value != "") {
			this.setState({
				tweets: [this.textInput.current.value, ...this.state.tweets]
			})
		} else {
			return false
		}
	}


	render() {
		return(
			<div>
			<form onSubmit={this.sendTweet}>
				<label>
				Post a tweet... <br />
					<textarea type="text" maxLength="140" className="input-box" ref={this.textInput}/>
				</label>
				<br />
				<button type="submit" value="Submit">Send Tweet </button>
			</form>
			{this.state.tweets.map((tweets, idx) => {
				return <TweetList tweets={tweets} key={idx} username={this.state.username}/>
			})}
			</div>
		)
	}
}

export default TweetBox