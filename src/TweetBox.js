import React, { Component } from 'react'
import TweetList from './TweetList'

class TweetBox extends Component {
	constructor(props){
		super(props)
		this.textInput = React.createRef();

		this.state = {
			charsLeft: 140,
			tweetList: ["What's up", "No"],
			username: "jil_slander"
		}
	}

	sendTweet = (e) => {
		e.preventDefault()
		console.log(this.textInput.current.value)
		if (this.textInput.current.value != "") {
			this.setState({
				tweetList: [this.textInput.current.value, ...this.state.tweetList]
			})
		} else {
			return false
		}
	}

	charTicker = () => {
		this.setState({
			charsLeft: 140 - this.textInput.current.value.length
		})
	}


	render() {
		return(
			<div>
			<form onSubmit={this.sendTweet}>
				<label>
				Post a tweet... <br /><br />
					<textarea type="text" maxLength="140" className="input-box" ref={this.textInput} onChange={this.charTicker}/>
				</label>
				<br />
				<div className="chars-left">{this.state.charsLeft}</div><br />
				<button type="submit" value="Submit">Send Tweet </button>
			</form>
			<br />
			{this.state.tweetList.map((tweets, idx) => {
				return <TweetList tweets={tweets} key={idx} username={this.state.username}/>
			})}
			</div>
		)
	}
}

export default TweetBox