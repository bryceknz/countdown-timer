import React from "react"

class Countdown extends React.Component {
  state = {
    seconds: this.props.seconds
  }

  componentDidMount () {
    this.timer = setInterval(
      this.tick,
      1000
    )
  }

  tick = () => {
    if (this.state.seconds > 0) {
      this.setState({ seconds: this.state.seconds - 1 })
    } else {
      clearInterval(this.timer);
      // window.location.reload();
    }
  }

  render () {
    return (
      <div style={{width: "100%", textAlign: "center"}}>
        {this.state.seconds
          ? <h1>{this.state.seconds}...</h1>
          : <h1>Countdown finished!</h1>}
      </div>
    )
  }
}

export default Countdown
