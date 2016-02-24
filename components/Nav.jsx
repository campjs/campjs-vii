import React, { PropTypes } from 'react'
import Link from './Link'
import cx from 'classnames'

const classes = {
  root: 'Bgc(#000.25) Bgc(t)--sm D(f) Jc(c) Ai(c) Pos(a) W(100%) T(0) Z(10) Mx(a) Mt(r1)--sm List(n)',
  item: 'Px(rq)--sm Flxs(1) Flxg(1) Flxg(0)--sm',
  link: {
    base: 'Ta(c) D(b) Py(r3q) Px(rq) Py(rq)--sm Px(rh)--sm Td(n) Fz(msn2) Fw(700) Whs(nw) Fz(msn1)--sm Trs(aeol)',
    notActive: 'C(#fff) C(#000.8):h Bgc(#fff.9):h Op(.8) Op(1):h',
    active: 'Bgc(#fff) C(#000.8)',
    tickets: 'Bgc(grass) C(dirt) C(dirt):h Bgc(grass):h'
  }
}

export const navItems = [
  {
    id: 1,
    path: '/about/',
    title: 'About'
  },
  {
    id: 2,
    path: '/schedule/',
    title: 'Schedule'
  },
  {
    id: 3,
    path: '/get-involved/',
    title: 'Get Involved'
  },
  {
    id: 4,
    path: '/news/',
    title: 'News'
  },
  {
    path: '/',
    title: 'Tickets'
  }
]

const Nav = ({
  rotation,
  className
}) => {
  return (
    <ul className={classes.root}>
      {navItems.map((item, i) => {
        const activeClass = (item.id === rotation)
        const allLinkClasses = cx(
          classes.link.base,
          (item.title === 'Tickets') && classes.link.tickets,
          activeClass && classes.link.active,
          !activeClass && classes.link.notActive
        )
        return (
          <li key={i} className={classes.item}>
            <Link to={item.path}
              className={allLinkClasses}>
              {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

Nav.propTypes = {
  rotation: PropTypes.number,
  className: PropTypes.string
}

export default Nav
