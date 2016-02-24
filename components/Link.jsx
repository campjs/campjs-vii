import React, { PropTypes } from 'react'
import { Link as RouterLink } from 'react-router'
import { link } from 'gatsby-helpers'

const Link = ({
  children,
  to,
  href,
  ...props
}) => {
  if (href && !to) {
    return <a {...props} href={href}>{children}</a>
  }
  return (
    <RouterLink to={link(to)} {...props}>
      {children}
    </RouterLink>
  )
}

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
  href: PropTypes.string
}

export default Link
