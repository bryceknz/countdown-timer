import React from 'react'
import moment from 'moment'

export default class Countdown extends React.Component {
  state = {
    secondsLeft: null
  }

  componentDidMount () {
    const rubbishDay = this.calculateRubbishDay(this.props.day)
    this.calculateDiff(rubbishDay)

    this.timer = setInterval(
      this.tick,
      1000
    )
  }

  calculateRubbishDay = (day) => {
    const nextDay = moment().day(day)

    if (nextDay <= moment.now()) {
      nextDay.add(1, 'weeks')
    }

    return nextDay
  }

  calculateDiff = (newDate) =>
    this.setState({ secondsLeft: newDate.diff(moment(), 'seconds') })

  tick = () => {
    const { secondsLeft } = this.state

    if (secondsLeft > 0) {
      this.setState({ secondsLeft: secondsLeft - 1 })
    } else {
      clearInterval(this.timer)
    }
  }

  timeBreakdown = () => {
    const { secondsLeft } = this.state

    const minuteInSecs = 60
    const hourInSecs = minuteInSecs * 60
    const dayInSecs = hourInSecs * 24

    return {
      seconds: Math.floor(secondsLeft % minuteInSecs),
      minutes: Math.floor(secondsLeft % hourInSecs / minuteInSecs),
      hours: Math.floor(secondsLeft % dayInSecs / hourInSecs),
      days: Math.floor(secondsLeft / dayInSecs)
    }
  }

  render () {
    const { secondsLeft } = this.state
    const { days, hours, minutes, seconds } = this.timeBreakdown()

    if (secondsLeft) {
      return (
        <>
          <h1>TOTAL SECONDS: {secondsLeft}</h1>
          <h2>{days} days, {hours} hours, {minutes} minutes, {seconds} seconds...</h2>
        </>
      )
    } else {
      return (<h1>Countdown finished!</h1>)
    }
  }
}
