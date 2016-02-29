import React, { PropTypes } from 'react'
import Face from './Face'
import cx from 'classnames'

const classes = {
  base: 'Trfs(p) Pe(n) Pos(a) B(0) L(0) Trs(eoel)'
}

const calcRotation = (rotate) => {
  const [x, y, z] = rotate
  if (x === y === z) return 'rotate3d(1,1,1,' + x + 'deg)'
  const rotateX = x ? 'rotateX(' + x + 'deg)' : ''
  const rotateY = y ? 'rotateY(' + y + 'deg)' : ''
  const rotateZ = z ? 'rotateZ(' + z + 'deg)' : ''
  return [rotateX, rotateY, rotateZ].join('')
}

const calcCubePosition = (position, size, rotate) => {
  const [x, y, z] = position
  const [sizeX, sizeY, sizeZ] = size
  const zTranslateStart = ((sizeZ / sizeY) / 2) * 100
  const zTranslateAdjust = (z - 1) * (100 / sizeY)
  const zTranslateY = zTranslateAdjust + zTranslateStart
  var positonX = (x !== 1)
    ? 'translateX(' + ((x - 1) * (100 / sizeX)) + '%)'
    : ''
  var positonY = (y !== 1)
    ? 'translateY(' + (-(y - 1) * (100 / sizeY)) + '%)'
    : ''
  var positonZ = (z !== 0)
    ? 'rotateX(90deg) translateY(' +
      zTranslateY + '%) rotateX(-90deg)'
    : ''
  var rotation = rotate ? calcRotation(rotate) : ''
  return [positonX, positonY, positonZ, rotation].join(' ')
}

const Block = ({
  position = [1, 1, 1],
  size = [1, 1, 1],
  rotate,
  postionAfterIntro,
  hideAfterIntro,
  background = 'plain',
  currentSide = 0,
  children,
  introClasses,
  className
}) => {
  const [width, height] = size
  return (
    <div className={cx(
        classes.base,
        className,
        (currentSide === 0) && introClasses
      )}
      style={{
        width: width + '%',
        height: height + '%',
        opacity: (currentSide !== 0) && hideAfterIntro ? 0 : 1,
        transform: ((currentSide !== 0) && postionAfterIntro)
          ? calcCubePosition(postionAfterIntro, size, rotate)
          : calcCubePosition(position, size, rotate)
      }}>
      <Face side={0}
        size={size}
        background={background} />
      <Face side={1}
        size={size}
        background={background}>
        {children}
      </Face>
      <Face side={2}
        size={size}
        background={background} />
      <Face side={3}
        size={size}
        background={background} />
      <Face side={4}
        size={size}
        background={background} />
      <Face side={5}
        size={size}
        background={background} />
    </div>
  )
}

Block.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  /**
   * Postion is based on x, y, z coordinates
   */
  position: PropTypes.array,
  /**
   * Size is based on x, y, z coordinates
   * Relative to the position
   */
  size: PropTypes.array,
  /**
   * Rotation of x, y or z
   * Default is none
   * Useful for putting block on an angle
   */
  rotate: PropTypes.array,
  /**
   * See the backgroun array in Face for options
   */
  background: PropTypes.string,
  /**
   * The current rotation of the main beam
   */
  currentSide: PropTypes.number.isRequired,
  /**
   * Classes that are applied during the intro
   */
  introClasses: PropTypes.string,
  /**
   * A new position array for after the intro
   */
  postionAfterIntro: PropTypes.array,
  /**
   * Will set it's opacity to 0 after intro if true
   */
  hideAfterIntro: PropTypes.bool
}

export default Block
