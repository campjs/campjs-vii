import React, { PropTypes } from 'react'
import cx from 'classnames'

const classes = {
  base: 'StretchedBox Bgc(#000) Pe(n) Trs(eo)',
  opacity: {
    none: 'D(n) Z(-1)',
    little: 'Op(.05)',
    some: 'Op(.13)',
    most: 'Op(.26)'
  }
}

const whichShader = (side, currentSide) => {
  if (side < 1 || side > 4) {
    return 'none'
  }
  return (side - 1 === currentSide)
    ? 'some'
    : 'most'
}

const Shader = ({
  currentSide = 0,
  side = 0
}) => {
  const shader = (side > 0 && side < 5) && (side === currentSide)
    ? 'little'
    : whichShader(side, currentSide)
  const stateClasses = cx(
    classes.base,
    classes.opacity[shader]
  )
  return (
    <div className={stateClasses} />
  )
}

Shader.propTypes = {
  side: PropTypes.oneOf([
    0, 1, 2, 3, 4, 5
  ]).isRequired,
  currentSide: PropTypes.oneOf([
    0, 1, 2, 3, 4, 5
  ]).isRequired
}

export default Shader
