import React from 'react'
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

export default Link
