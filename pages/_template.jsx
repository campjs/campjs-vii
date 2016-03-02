import React, { Component, PropTypes } from 'react'
import { RouteHandler, HistoryLocation } from 'react-router'
import cx from 'classnames'
import Page from '../wrappers/md'
import {
  AboutIndex,
  Beam,
  BeamFace,
  BeamTopWorld,
  Icons,
  Footer,
  Link,
  Nav,
  NewsIndex
} from '../components'
import { navItems } from '../components/Nav'

import '../css/fonts.css'
import '../css/base.css'
import '../css/atomic.css'
import '../css/extra.css'

let combokeys

if (typeof document !== 'undefined') {
  var Combokeys = require('combokeys')
  var CombokeysGlobal = require('combokeys/plugins/global-bind')
  var CombokeysBindDictionary = require('combokeys/plugins/bind-dictionary')
  combokeys =
    CombokeysBindDictionary(CombokeysGlobal(new Combokeys(document)))
}

const classes = {
  root: 'Mih(100%)',
  atmosphere: 'Pb(r8) Prso(prsoa) Prs(5000px) Ov(h)'
}

const getRotation = (path) => {
  const newPath = (path.indexOf('/news/') !== -1)
    ? '/news/'
    : (path.indexOf('/about/') !== -1)
      ? '/about/'
      : path
  const newItem = navItems
    .find((item) => item.path === newPath)
  return newItem ? newItem.id : 0
}

class Template extends Component {
  componentWillMount () {
    if (typeof document !== 'undefined') {
      combokeys.bindGlobal('esc', () => HistoryLocation.replace('/'))
      combokeys.bindGlobal('up', this.goHomeIfAtTop)
      combokeys.bindGlobal('left', this.goToPrevPage)
      combokeys.bindGlobal('right', this.goToNextPage)
      combokeys.bindGlobal('down', this.goToFirst)
    }
  }
  goHomeIfAtTop = () => {
    if (typeof window !== 'undefined' && (window.pageYOffset === 0)) {
      HistoryLocation.replace('/')
      return false
    }
  }
  goToFirst = (e) => {
    if (this.props.state.path === '/') {
      HistoryLocation.replace(navItems[0].path)
      return false
    }
  }
  goToPrevPage = () => {
    const currentRotation = getRotation(this.props.state.path)
    const prevRotation = (currentRotation === 0)
      ? 1
      : (currentRotation === 1)
        ? 4
        : currentRotation - 1
    const prevPath = navItems
      .find((item) => item.id === prevRotation).path
    HistoryLocation.replace(prevPath)
  }
  goToNextPage = () => {
    const currentRotation = getRotation(this.props.state.path)
    const nextRotation = (currentRotation === 0)
      ? 2
      : (currentRotation === 4)
        ? 1
        : currentRotation + 1
    const nextPath = navItems
      .find((item) => item.id === nextRotation).path
    HistoryLocation.replace(nextPath)
  }
  render () {
    const {
      state,
      page,
      pages
    } = this.props
    const rotation = getRotation(state.path)
    const home = (rotation === 0)
    const homeLinkClasses = cx(
      'D(b) Pos(r) Z(5) Mb(-8vh)',
      home ? 'H(48vh)' : 'H(58vh)'
    )
    return (
      <div className={classes.root + ' Side-' + rotation + '--is-active'}>
        <Icons />
        <Nav rotation={rotation} />
        <div className={classes.atmosphere}>
          <Link className={homeLinkClasses} to={home ? '/about/' : '/'}>
            <div className='Hidden'>{home ? 'About' : 'Home'}</div>
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
              {/\/about\/\w+/.test(state.path)
                ? <RouteHandler {...this.props} />
                : <AboutIndex pages={pages}/>
              }
            </BeamFace>
            <BeamFace
              side={2}
              currentSide={rotation}>
              <Page
                currentPath={page.path}
                {...{
                  ...this.props,
                  page: pages.find((page) =>
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
                  page: pages.find((page) =>
                    page.requirePath === 'get-involved/index.md')
                }}/>
            </BeamFace>
            <BeamFace
              side={4}
              currentSide={rotation}>
              {/\/news\/\w+/.test(state.path)
                ? <RouteHandler {...this.props} />
                : <NewsIndex pages={pages}/>
              }
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
