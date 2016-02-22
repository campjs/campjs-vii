import React, { PropTypes } from 'react'
import { backgrounds } from './Face'
import cx from 'classnames'

const classes = {
  grass: 'H(rh) ' + backgrounds.grass,
  sand: 'Py(rh) Px(r1) ' + backgrounds.sand,
  content: {
    base: 'Trs(eol)',
    intro: 'Op(0)'
  }
}

const BeamSideHeader = ({
  children,
  intro
}) => {
  const contentClasses = cx(
    classes.content.base,
    intro && classes.content.intro
  )
  return (
    <div>
      <div className={classes.grass} />
      <div className={classes.sand}>
        <div className={contentClasses}>
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
