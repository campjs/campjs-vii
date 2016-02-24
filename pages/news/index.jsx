import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import moment from 'moment'
import {
  Link,
  Heading
} from '../../components'

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
            if (page.data && (page.path.indexOf('/news/') !== -1)) {
              const pStart = page.data.body.indexOf('>') + 1
              const pEnd = page.data.body.indexOf('</p>') - pStart
              const teaser = page.data.teaser ||
                page.data.body.substr(pStart, pEnd)
              return (
                <div key={key} className='Mb(r2)'>
                  <Heading level='2' className='Fz(ms2)'><Link className='Link' to={page.path}>{page.data.title}</Link></Heading>
                  <div className='Fz(msn1) Tt(u) Op(.6) Mb(rh)'>{moment(page.data.date).format('MMMM D, YYYY')}</div>
                  <p className='Mb(rh)'>{teaser}</p>
                  <p><Link className='Link Fz(msn1)' to={page.path}>Read more</Link></p>
                </div>
              )
            }
          })}
        </div>
      </DocumentTitle>
    )
  }
}

News.propTypes = {
  pages: PropTypes.array,
  config: PropTypes.object
}
