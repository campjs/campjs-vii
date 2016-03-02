import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import {
  BeamSideHeader,
  BeamHeading,
  Link
} from '../components'

export default class Md extends Component {
  getSectionTitle (newsPost, aboutPost) {
    if (newsPost) {
      return ' | News'
    } else if (aboutPost) {
      return ' | About'
    }
    return ''
  }
  getPageTitle (currentPath, postTitle) {
    switch (currentPath) {
      case '/about/': return 'About'
      case '/schedule/': return 'Schedule'
      case '/get-involved/': return 'Get Involved'
      case '/news/': return 'News'
      case '/': return false
      default: return postTitle
    }
  }
  render () {
    const {
      config,
      currentPath,
      page
    } = this.props
    const newsPost = /\/news\//.test(page.path)
    const aboutPost = /\/about\//.test(page.path)
    const pageType = newsPost ? 'news' : 'about'
    const post = page.data
    const pageTitle = this.getPageTitle(currentPath, post.title)
    const sectionTitle = this.getSectionTitle(newsPost, aboutPost)
    const title = pageTitle
      ? pageTitle + sectionTitle + ' | ' + config.siteTitle
      : config.htmlTitle
    return (
      <DocumentTitle title={title}>
        <div className='markdown'>
          <BeamSideHeader>
            <BeamHeading>{post.title}</BeamHeading>
          </BeamSideHeader>
          {(newsPost || aboutPost) &&
            <Link to={`/${pageType}/`}
              className='Tt(u) Fz(msn1) Bgc(#000.4) Op(.7) Op(1):h Px(r1) Py(rq) D(b)'>
              &lt; Back to all {pageType}
            </Link>
          }
          <div className='P(r1)'>
            {newsPost &&
              <p className='Mb(r1h) Op(.6) Fz(msn1) Tt(u)'>
                {moment(post.date).format('MMMM D, YYYY')}
              </p>
            }
            <div dangerouslySetInnerHTML={{__html: post.body}}/>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

Md.propTypes = {
  page: PropTypes.object,
  config: PropTypes.object,
  currentPath: PropTypes.string,
  state: PropTypes.object
}
