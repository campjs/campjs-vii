import React, { PropTypes } from 'react'

const classes = 'C(dirt) Lh(1) Fz(ms3) Ff(bit) Fz(ms4)--osm Fz(ms5)--omd Fz(ms6)--lg' +
  'Lts(-0.02em) Fw(600)'

const BeamHeading = ({
  children
}) => {
  return (
    <h1 className={classes}>
      {children}
    </h1>
  )
}

BeamHeading.propTypes = {
  children: PropTypes.any
}

export default BeamHeading
