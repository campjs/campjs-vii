import React, { PropTypes } from 'react'
import { Link as RouterLink } from 'react-router'
import { link } from 'gatsby-helpers'

const Link = ({
  children,
  to,
  ...props
}) => {
  if (to.indexOf('http') !== -1) {
    return <a {...props} href={to}>{children}</a>
  }
  return (
    <RouterLink to={link(to)} {...props}>
      {children}
    </RouterLink>
  )
}

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string
}

export default Link
