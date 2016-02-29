import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import {
  BeamSideHeader,
  BeamHeading,
  Link
} from '../components'

export default class Md extends Component {
  getSectionTitle (news) {
    if (news) {
      return ' | News'
    }
    return ''
  }
  render () {
    const {
      config,
      page
    } = this.props
    const newsPost = /\/news\//.test(page.path)
    const aboutPost = /\/about\//.test(page.path)
    const pageType = newsPost ? 'news' : 'about'
    const post = page.data
    const sectionTitle = this.getSectionTitle(post.date)
    return (
      <DocumentTitle title={`${post.title}${sectionTitle} | ${config.siteTitle}`}>
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
  state: PropTypes.object
}
