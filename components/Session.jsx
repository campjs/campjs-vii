import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import { Link } from './'
import { escapeHtml } from '../utils'

const classes = {
  times: 'D(f) Tt(u) Ff(bit) Fz(msn1) Fw(600) Px(rq) Lh(r1) Mb(rh)',
  spaces: {
    'Gymnasium': 'Bgc(sky)',
    'Workshop Area': 'Bgc(tree)',
    'Dining Hall': 'Bgc(sand) C(dirt)'
  },
  session: 'D(f) Fld(rr) Mb(r1)',
  title: 'Fw(600) Fz(ms1) Lh(1.2) Mb(rq)'
}

class Session extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showDetails: false
    }
    this.handleShowDetails = this.handleShowDetails.bind(this)
  }
  handleShowDetails () {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }
  render () {
    const {
      abstract,
      title,
      times,
      speaker,
      space,
      ...props
    } = this.props
    const {
      showDetails
    } = this.state
    const timesClasses = cx(
      classes.times,
      classes.spaces[space] || 'Bgc(#fff) C(dirt)'
    )
    const bio = speaker ? escapeHtml(speaker.bio) : ''
    return (
      <div {...props}>
        <h3 className={timesClasses}>
          <span>{times.replace(':00', '') || 'Time not specified'}</span>
          <span className='Mstart(a)'>{space}</span>
        </h3>
        <div className={classes.session}>
          <div className='Flxg(1)'>
            <h4 className={classes.title}>{title}</h4>
            {speaker &&
              <div className='Mb(rq)'>
                <span>{speaker.name} </span>
                {speaker.twitter &&
                  (<Link className='Link' to={'https://twitter.com/' + speaker.twitter.substr(1)}>
                    {speaker.twitter}
                  </Link>)
                }
              </div>
            }
            {abstract &&
              (<div>
                <button
                  onClick={this.handleShowDetails}
                  className='D(f) W(100%)'>
                  <span className={showDetails ? 'Fw(600)' : 'Link'}>
                    Details
                    {!showDetails && (<span className='Pstart(rq)'>></span>)}
                  </span>
                  {showDetails && (<span className='Mstart(a) Link'>Hide x</span>)}
                </button>
                {showDetails &&
                  <div dangerouslySetInnerHTML={{__html: abstract}}
                    className='Bdtw(1px) Bdts(s) Mt(rh) Pt(rh) Details'/>
                }
              </div>)
            }
          </div>
          {speaker && speaker.twitter &&
            <Link to={'https://twitter.com/' + speaker.twitter.substr(1)} className='Flxs(0) Mend(rh)'>
              <img src={speaker.image_75} alt={speaker.twitter} title={bio} />
            </Link>
          }
          {speaker && !speaker.twitter &&
            <div className='Flxs(0) Mend(rh)'>
              <img src={speaker.image_75} alt={speaker.twitter} title={bio} />
            </div>
          }
        </div>
      </div>
    )
  }
}

Session.propTypes = {
  abstract: PropTypes.string,
  title: PropTypes.string,
  times: PropTypes.string,
  speaker: PropTypes.object,
  space: PropTypes.string
}

Session.defaultProps = {
  times: 'Time not specified',
  space: 'No location'
}

export default Session
