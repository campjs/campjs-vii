import React, { PropTypes } from 'react'
import cx from 'classnames'
import { Link } from './'

const classes = {
  base: 'D(ib) Mb(r1) Px(r3q) Py(rq) Fw(700) C(#fff) Bxsh(sh1) Bxsh(sh2):h Bxsh(sh2):f Bxsh(sh1):a',
  type: {
    primary: 'Bgc(tree)',
    secondary: 'Bgc(sky)'
  }
}

const LinkButton = ({
  children,
  className,
  type,
  ...props
}) => {
  const classNames = cx(
    classes.base,
    classes.type[type],
    className,
  )
  return (
    <Link
      {...props}
      className={classNames}
      >
      {children}
    </Link>
  )
}

LinkButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary'])
}

LinkButton.defaultProps = {
  type: 'primary'
}

export default LinkButton
