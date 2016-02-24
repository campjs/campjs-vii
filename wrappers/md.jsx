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
      page,
      currentPath,
      config
    } = this.props
    const post = page.data
    const intro = (currentPath === '/')
    const sectionTitle = this.getSectionTitle(post.date)
    return (
      <DocumentTitle title={`${post.title}${sectionTitle} | ${config.siteTitle}`}>
        <div className='markdown'>
          <BeamSideHeader intro={intro}>
            <BeamHeading>{post.title}</BeamHeading>
          </BeamSideHeader>
          {post.date &&
            <Link to='/news/' className='Tt(u) Fz(msn1) Bgc(#000.4) Op(.7) Op(1):h Px(r1) Py(rq) D(b)'>
              &lt; Back to all news
            </Link>
          }
          <div className='P(r1)'>
            {post.date &&
              <p className='Mb(r1h) Op(.6) Fz(msn1) Tt(u)'>
                {moment(post.date).format('MMMM D, YYYY')}
              </p>
            }
            {post.teaser &&
              <p className='Fz(ms1) Mb(r1) Op(.6)'>{post.teaser}</p>
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
  currentPath: PropTypes.string
}
