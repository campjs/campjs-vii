import React, { Component, PropTypes } from 'react'
import { RouteHandler } from 'react-router'
import cx from 'classnames'
import Page from '../wrappers/md'
import {
  Beam,
  BeamFace,
  BeamTopWorld,
  BeamSideHeader,
  BeamHeading,
  Footer,
  Link,
  Nav
} from '../components'
import Icons from '../components/Icons'

import '../css/fonts.css'
import '../css/base.css'
import '../css/atomic.css'
import '../css/extra.css'

const classes = {
  root: 'D(f) Fld(c) Mih(100%)',
  atmosphere: 'Pb(r6) Prso(prsoa) Prs(5000px) Ov(h)'
}

const getRotation = (path) => {
  const newPath = path.indexOf('/news/') !== -1 ? '/news/' : path
  switch (newPath) {
    case '/about/': return 1
    case '/schedule/': return 2
    case '/get-involved/': return 3
    case '/news/': return 4
    case '/':
    default: return 0
  }
}

class Template extends Component {
  render () {
    const {
      state,
      page,
      pages
    } = this.props
    const rotation = getRotation(state.path)
    const homeLinkClasses = cx(
      'D(b) Pos(r) Z(5) Mb(-8vh)',
      (rotation === 0) ? 'H(48vh)' : 'H(58vh)'
    )
    return (
      <div className={classes.root}>
        <Icons />
        <Nav rotation={rotation} />
        <div className={classes.atmosphere}>
          <Link className={homeLinkClasses} to='/'>
            <div className='Hidden'>Home</div>
          </Link>
          <Beam rotation={rotation}>
            <BeamFace side={0}
              background='grass'
              currentSide={rotation}>
              <BeamTopWorld currentSide={rotation} />
            </BeamFace>
            <BeamFace
              side={1}
              currentSide={rotation}>
              <Page
                currentPath={page.path}
                {...{
                  ...this.props,
                  page: pages.find(page =>
                      page.requirePath === 'about/index.md')
                }}/>
            </BeamFace>
            <BeamFace
              side={2}
              currentSide={rotation}>
              <Page
                currentPath={page.path}
                {...{
                  ...this.props,
                  page: pages.find(page =>
                    page.requirePath === 'schedule/index.md')
                }}/>
            </BeamFace>
            <BeamFace
              side={3}
              currentSide={rotation}>
              <Page
                currentPath={page.path}
                {...{
                  ...this.props,
                  page: pages.find(page =>
                    page.requirePath === 'get-involved/index.md')
                }}/>
            </BeamFace>
            <BeamFace
              side={4}
              currentSide={rotation}>
              { !page.data &&
                <BeamSideHeader intro={rotation === 0}>
                  <BeamHeading>News</BeamHeading>
                </BeamSideHeader>
              }
              <RouteHandler {...this.props} />
            </BeamFace>
            <BeamFace
              side={5}
              currentSide={rotation} />
          </Beam>
        </div>
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  state: PropTypes.object,
  config: PropTypes.object,
  page: PropTypes.object,
  pages: PropTypes.array
}

export default Template
