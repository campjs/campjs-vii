import React, { PropTypes } from 'react'
import { backgrounds } from './Face'

import { isNotFirefox } from '../utils'

const classes = {
  grass: 'H(rh) ' + backgrounds.grass,
  sand: 'Py(rh) Px(r1) ' + backgrounds.sand,
  content: 'Trs(eol) Side-0--is-active_Op(0)'
}

const BeamSideHeader = ({
  children,
  intro
}) => {
  return (
    <div>
      <div className={classes.grass} />
      <div className={classes.sand}>
        <div className={isNotFirefox && classes.content}>
          {children}
        </div>
      </div>
    </div>
  )
}

BeamSideHeader.propTypes = {
  children: PropTypes.any,
  intro: PropTypes.bool
}

export default BeamSideHeader
