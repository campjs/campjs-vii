import React, { PropTypes } from 'react'
import Face from './Face'
import cx from 'classnames'

const classes = {
  base: 'Trfs(p) Pos(a) B(0) L(0) Trs(eoel)'
}

const calcCubePosition = (position, size) => {
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
  return [positonX, positonY, positonZ].join(' ')
}

const Block = ({
  position = [1, 1, 1],
  size = [1, 1, 1],
  postionAfterIntro,
  hideAfterIntro,
  background = 'plain',
  currentSide = 0,
  children,
  introClasses
}) => {
  const [width, height] = size
  return (
    <div className={cx(
        classes.base,
        (currentSide === 0) && introClasses
      )}
      style={{
        width: width + '%',
        height: height + '%',
        opacity: (currentSide !== 0) && hideAfterIntro ? 0 : 1,
        transform: ((currentSide !== 0) && postionAfterIntro)
          ? calcCubePosition(postionAfterIntro, size)
          : calcCubePosition(position, size)
      }}>
      <Face side={0}
        size={size}
        currentSide={currentSide}
        background={background} />
      <Face side={1}
        size={size}
        currentSide={currentSide}
        background={background}>
        {children}
      </Face>
      <Face side={2}
        size={size}
        currentSide={currentSide}
        background={background} />
      <Face side={3}
        size={size}
        currentSide={currentSide}
        background={background} />
      <Face side={4}
        size={size}
        currentSide={currentSide}
        background={background} />
      <Face side={5}
        size={size}
        currentSide={currentSide}
        background={background} />
    </div>
  )
}

Block.propTypes = {
  children: PropTypes.any,
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
   * See the backgroun array in Face for options
   */
  background: PropTypes.string,
  // The current rotation of the main beam
  currentSide: PropTypes.number.isRequired,
  // Classes that are applied during the intro
  introClasses: PropTypes.string
}

export default Block
