import React, { PropTypes } from 'react'
import moment from 'moment'
import {
  BeamSideHeader,
  BeamHeading,
  Heading,
  Link
} from './'

const classes = {
  root: '',
  body: 'P(r1)'
}

const NewsIndex = ({
  children,
  pages
}) => {
  return (
    <div className={classes.root}>
      <BeamSideHeader>
        <BeamHeading>News</BeamHeading>
      </BeamSideHeader>
      <div className={classes.body}>
        {pages.map((page, key) => {
          if (page.data && (page.path.indexOf('/news/') !== -1)) {
            const pStart = page.data.body.indexOf('>') + 1
            const pEnd = page.data.body.indexOf('</p>') - pStart
            const teaser = page.data.teaser ||
              page.data.body.substr(pStart, pEnd)
            return (
              <div key={key} className='Mb(r2)'>
                <Heading level={2} className='Fz(ms2)'>
                  <Link className='Link' to={page.path}>{page.data.title}</Link>
                </Heading>
                <div className='Fz(msn1) Tt(u) Op(.6) Mb(rh)'>{moment(page.data.date).format('MMMM D, YYYY')}</div>
                <p className='Mb(rh)'>{teaser}</p>
                <p><Link className='Link Fz(msn1)' to={page.path}>Read more</Link></p>
              </div>
            )
          }
        })}
        {children}
      </div>
    </div>
  )
}

NewsIndex.propTypes = {
  children: PropTypes.any,
  pages: PropTypes.array
}

export default NewsIndex
