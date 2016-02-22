import React, { PropTypes } from 'react'
import cx from 'classnames'
import { backgrounds } from './Face'
import { Shader } from './'

const classes = {
  base: ' C(#fff) Trfs(p) Trs(eol) W(25%) Bfv(h)',
  side: [
    'Pos(a) H(0) Trf(faceTop)',
    'Pos(r) Trf(faceFront)',
    'Pos(r) Mstart(-25%) Trf(faceRight)',
    'Pos(r) Mstart(-25%) Trf(faceBack)',
    'Pos(r) Mstart(-25%) Trf(faceLeft)',
    'Pos(a) H(0) B(0) L(0) Trf(faceBottom)'
  ]
}

const BeamFace = ({
  background = 'dirt',
  children,
  className,
  currentSide = 0,
  side = 0
}) => {
  const stateClasses = cx(
    classes.base,
    classes.side[side],
    background && backgrounds[background],
    className
  )
  return (
    <div className={stateClasses}>
      <Shader side={side} currentSide={currentSide}/>
      {children}
    </div>
  )
}

BeamFace.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  shader: PropTypes.oneOf(['none', 'some', 'most']),
  side: PropTypes.oneOf([
    0, 1, 2, 3, 4, 5
  ]).isRequired,
  currentSide: PropTypes.oneOf([
    0, 1, 2, 3, 4, 5
  ]).isRequired,
  background: PropTypes.oneOf(Object.keys(backgrounds))
}

export default BeamFace
