import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import scheduleData from '../sessions.json'
import {
  BeamSideHeader,
  BeamHeading,
  Heading,
  Link,
  LinkButton,
  Session
} from './'

const simplifyDay = (day) => (
  day.substr(0, 3) + day.substr(day.length - 9)
)

class ScheduleIndex extends Component {
  constructor(props) {
    super(props)
    const today = new Date()
    const isItSunday = (today.getDate() === 5) && (today.getMonth() === 5)
    this.state = {
      activeDay: isItSunday ? 1 : 0
    }
    this.handleSwitchDay = this.handleSwitchDay.bind(this)
  }
  handleSwitchDay (day, e) {
    this.setState({
      activeDay: day
    })
  }
  render () {
    const {
      active,
      children,
      pages
    } = this.props
    const {
      activeDay
    } = this.state
    const days = scheduleData.sessions
    const activeDaySessions = days[activeDay].sessions
    const dayButtonClasses = 'P(rq) Mend(rq) Bgc(#fff.2):h'
    console.log(activeDaySessions)
    return (
      <div>
        <BeamSideHeader>
          <BeamHeading>Schedule</BeamHeading>
        </BeamSideHeader>
        <div className='P(r1)'>
          <div className='Mb(r1)'>
            {days.map((day, key) => (
              <button key={key}
                className={activeDay === key ? 'Bgc(#fff)! C(dirt) ' + dayButtonClasses : dayButtonClasses}
                onClick={this.handleSwitchDay.bind(this, key)}>
                <Heading level={2} className='Pos(st) T(0) L(0) Tt(u) Lh(1)'>
                  {day.day ? simplifyDay(day.day) : 'Unscheduled'}
                </Heading>
              </button>
            ))}
          </div>
          <div>
            {activeDaySessions.map((session) =>
              <Session
                key={session.id}
                abstract={session.abstract}
                title={session.title}
                times={session.times}
                speaker={session.speakers[0]}
                space={session.space}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

ScheduleIndex.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  pages: PropTypes.array
}

export default ScheduleIndex
