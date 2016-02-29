import React, { PropTypes } from 'react'
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

const AboutIndex = ({
  children,
  pages
}) => {
  return (
    <div className={classes.root}>
      <BeamSideHeader>
        <BeamHeading>About</BeamHeading>
      </BeamSideHeader>
      <div className={classes.body}>
        <p className='Mb(r1)'>CampJS is for everyone who is interested in web technology. Beginners & experts, all are welcome.</p>
        <p className='Mb(r1)'>Networking with other developers is arguably the most valuable aspect of a conference, yet it's often a hurried and fleeting affair that happens in-between the schedule of a regular conference - but CampJS isn't a regular conference. This weekend-long retreat allows everyone enough time to learn new things, relax and most importantly: create real friendships and connections.</p>
        <p className='Mb(r1)'>CampJS creates a unique blend of expert-led, structured content and self-directed, unstructured learning. Some content is scheduled, but the main area is reserved for hacking. The final night is reserved for demos for people to show off what they have built or learned at the event.</p>
        <Heading level={2} className='Fz(ms1) Mt(r1) Mb(rh)'>
          More Details
        </Heading>
        {pages.map((page, key) => {
          if (page.data && (page.path.indexOf('/about/') !== -1)) {
            return (
              <ul key={key} className='Mb(r2)'>
                <li><Link className='Link' to={page.path}>
                  {page.data.title}
                </Link></li>
              </ul>
            )
          }
        })}
        {children}
      </div>
    </div>
  )
}

AboutIndex.propTypes = {
  children: PropTypes.any,
  pages: PropTypes.array
}

export default AboutIndex
