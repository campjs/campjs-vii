import React, { PropTypes } from 'react'
import cx from 'classnames'
import {
  BeamSideHeader,
  BeamHeading,
  Heading,
  Link,
  LinkButton
} from './'

const classes = {
  root: '',
  body: {
    base: 'P(r1)',
    inactive: ' Z(-1) Pos(r)'
  }
}

const AboutIndex = ({
  active,
  children,
  pages
}) => {
  const bodyClasses = cx(
    classes.body.base,
    !active && classes.body.inactive
  )
  const videoClasses = cx(
    'Mb(r1) Mx(-1.5rem) Pos(r) H(0) Pb(r1) Pt(56.15%)',
    !active && 'Z(-1)'
  )
  return (
    <div className={classes.root}>
      <BeamSideHeader>
        <BeamHeading>About</BeamHeading>
      </BeamSideHeader>
      <div className={bodyClasses}>
        <p className='Fz(ms1) Mb(r1)'>CampJS is for anyone who is interested in web technology. Beginners & experts, <strong>all are welcome</strong>.</p>
        <div className={videoClasses}>
          <iframe className='StretchedBox W(100%) H(100%)'
            src='https://player.vimeo.com/video/159874394?color=bcce46&title=0&byline=0&portrait=0'
            frameBorder='0'
            webkitallowfullscreen
            mozallowfullscreen
            allowFullScreen />
        </div>
        <p className='Mb(r1)'>Networking with other developers is arguably the most valuable aspect of a conference, yet it's often a hurried and fleeting affair that happens in-between the schedule of a regular conference - but CampJS isn't a regular conference. This weekend-long retreat allows everyone enough time to learn new things, relax and most importantly: create real friendships and connections.</p>
        <p className='Mb(r1)'>CampJS creates a unique blend of expert-led, structured content and self-directed, unstructured learning. Some content is scheduled, but the main area is reserved for hacking. The final night is reserved for demos for people to show off what they have built or learned at the event.</p>
        <Heading level={2} className='Fz(ms1) Mt(r2) Mb(rh)'>When/Where</Heading>
        <p className='Mb(r1)'>
          CampJS VII will commence from Friday afternoon on the 3rd of June, and run through to Monday morning the 6th.
          The Camp will be held at <Link className='Link' to='https://sportandrecreation.nsw.gov.au/facilities/brokenbay/tour'>Broken Bay</Link>, Sydney on the Hawkesbury River.
        </p>
        <p>
          <LinkButton to='http://tickets.campjs.com/' className='Mend(r1)'>Get Tickets!</LinkButton>
          <LinkButton to='http://lanyrd.com/2016/campjsnews/' type='secondary'>Track CampJS on Lanyrd</LinkButton>
        </p>
        <p className='Mb(r1)'>
          More details coming soon.
        </p>
        <Heading level={2} className='Fz(ms1) Mt(r2) Mb(rh)'>
          More Info
        </Heading>
        <ul className='Mb(r2)'>
          {pages.map((page, key) => {
            if (page.data && (page.path.indexOf('/about/') !== -1)) {
              return (
                <li key={key}><Link className='Link' to={page.path}>
                  {page.data.title}
                </Link></li>
              )
            }
          })}
        </ul>
        {children}
      </div>
    </div>
  )
}

AboutIndex.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  pages: PropTypes.array
}

export default AboutIndex
