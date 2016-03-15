import React, { PropTypes } from 'react'
import cx from 'classnames'
import {
  Icon,
  Link
} from './'

const classes = {
  root: {
    base: 'Bgc(#000.25) D(f) Jc(c) Ai(c) Py(rh) Fz(msn2)',
    home: 'Pos(a) B(0) W(100%)'
  },
  link: 'C(#fff) Mx(rq) Mx(rh)--land Whs(nw) Op(.8) Op(1):h D(if) Ai(c)',
  linkText: 'Mstart(rq) D(n) D(i)--md'
}

const Nav = ({
  rotation,
  className
}) => {
  const home = (rotation === 0)
  const rootClasses = cx(
    classes.root.base,
    home && classes.root.home
  )
  return (
    <div className={rootClasses}>
      <Link to='/about/code-of-conduct/' className={classes.link}>
        Code of Conduct
      </Link>
      <Link to='http://twitter.com/campjsnews' className={classes.link}>
        <Icon name='twitter' /><span className={classes.linkText}>Twitter</span>
      </Link>
      <Link to='http://github.com/campjs' className={classes.link}>
        <Icon name='github' /><span className={classes.linkText}>Github</span>
      </Link>
    </div>
  )
}

Nav.propTypes = {
  rotation: PropTypes.number,
  className: PropTypes.string
}

export default Nav
