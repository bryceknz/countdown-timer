import React from 'react'
import moment from 'moment'

class Countdown extends React.Component {
  state = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null
  }

  componentDidMount () {
    const rubbishDay = this.nextDay(this.props.day)
    this.calculateDiff(rubbishDay)

    this.timer = setInterval(
      this.tick,
      1000
    )
  }

  nextDay = (day) => {
    return moment().day(day).startOf('day')
  }

  calculateDiff = (newDate) => {
    const now = moment()
    console.log('monent()', now)

    const days = newDate.diff(now, 'days')
    const hours = newDate.diff(now.add(days, 'days'), 'hours')
    const minutes = newDate.diff(now.add(hours, 'hours'), 'minutes')
    const seconds = newDate.diff(now.add(minutes, 'minutes'), 'seconds')

    console.log(days)
    console.log(hours)
    console.log(minutes)
    console.log(seconds)

    this.setState({ days, hours, minutes, seconds })
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
        {/* {this.state.futureDate && this.state.futureDate.format('hh')} */}
        {this.state.seconds
          ? <h1>{this.state.seconds}...</h1>
          : <h1>Countdown finished!</h1>}
      </div>
    )
  }
}

export default Countdown
