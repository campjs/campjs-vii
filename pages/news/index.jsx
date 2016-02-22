import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import moment from 'moment'
import Link from '../../components/Link'

export default class News extends Component {
  render () {
    const {
      pages,
      config
    } = this.props
    return (
      <DocumentTitle title={'News | ' + config.htmlTitle}>
        <div className='P(r1)'>
          {pages.map((page, key) => {
            return (page.data && (page.path.indexOf('/news/') !== -1))
              ? (<div key={key} className='Mb(r2)'>
                <h2 className='Fz(ms2) Fw(600)'><Link className='Link' to={page.path}>{page.data.title}</Link></h2>
                <div className='Fz(msn1) Tt(u) Op(.6) Mb(rh)'>{moment(page.data.date).format('MMMM D, YYYY')}</div>
                <p className='Mb(rh)'>{page.data.teaser}</p>
                <p><Link className='Link Fz(msn1)' to={page.path}>Read more</Link></p>
              </div>)
              : undefined
          })}
        </div>
      </DocumentTitle>
    )
  }
}

News.propTypes = {
  pages: PropTypes.object,
  config: PropTypes.object
}
