import React, { PropTypes } from 'react'
import cx from 'classnames'

const classes = {
  base: 'Trs(eoel) Pos(r) Trfs(p) W(93vw) Maw(37.5rem) Mx(a)',
  rotation: [
    'Trf(beamTop)',
    'Trf(beamFront)',
    'Trf(beamRight)',
    'Trf(beamBack)',
    'Trf(beamLeft)',
    'Trf(beamBottom)'
  ]
}

const innerClasses = 'D(f) Ov(v) Trfs(p) W(400%)'

const Beam = ({
  className,
  children,
  rotation = 0
}) => {
  const stateClasses = cx(
    classes.base,
    classes.rotation[rotation],
    className
  )
  return (
    <div className={stateClasses}>
      <div className={innerClasses}>
        {children}
      </div>
    </div>
  )
}

Beam.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  rotation: PropTypes.number
}

export default Beam
